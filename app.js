import express from 'express';
const app = express();
const port = 5000;

// Import route modules
import { indexRoute, route200, createResource, noContentRoute } from './custom-module/routeModule.js';
import { Invalidmodule } from './custom-module/errorModule.js';
import { route408 } from './custom-module/408route.js';
import serverError from './custom-module/500error.js';

// Middleware for parsing JSON requests
app.use(express.json());

// Define routes
app.get("/", indexRoute);
app.post("/create", createResource);
app.get("/200", route200);
app.get("/no-content", noContentRoute);
app.get("/408", route408);
app.use("/internal-error", serverError);

// Fallback for invalid routes
app.use("*", Invalidmodule);

// Start the server
app.listen(port, () => {
  console.log(`Server is active on port: ${port}`);
}).on('error', (err) => {
  console.error(`Error starting server: ${err}`);
});
