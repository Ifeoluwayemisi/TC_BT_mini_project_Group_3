import express from 'express';
import morgan from 'morgan';
const app = express();
const port = 5000;

// Import route modules
import { 
  indexRoute, route200, createResource, noContentRoute, validateResponse, serviceUnavailable 
} from './custom-module/routeModule.js';
import { Invalidmodule } from './custom-module/errorModule.js';
import { route408 } from './custom-module/408route.js';
import serverError from './custom-module/500error.js';
import route405 from './custom-module/405error.js';

// Middleware for parsing JSON and log HTTP requests 
app.use(express.json());
app.use(morgan('dev'));

// Define routes
app.get("/", indexRoute);
app.post("/create", createResource);
app.get("/200", route200);
app.get("/no-content", noContentRoute);
app.get("/408", route408);
app.get("/validate", validateResponse);
app.post("/validate", validateResponse);
app.get("/503", serviceUnavailable);

// Use middleware routers
app.use("/internal-error", serverError);
app.use("/405", route405);

// response for invalid routes
app.use("*", Invalidmodule);

// Error handler for uncaught errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is active on port: ${port}`);
}).on('error', (err) => {
  console.error(`Error starting server: ${err}`);
});
