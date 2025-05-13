import express from 'express';
const app = express();

// Import the necessary modules from routeModule.js
import { indexRoute, route200, createResource, noContentRoute,validateResponse } from './custom-module/routeModule.js';
import serverError from './custom-module/500error.js';
import { Invalidmodule } from './custom-module/errorModule.js';
import { route408 } from './custom-module/408route.js'; 

const port = 5000;

// Middleware for parsing JSON requests
app.use(express.json());


// Handle the / route using the indexRoute handler
app.get("/", indexRoute);

// Handle the /create route using the createResource handler
app.post("/create", createResource);

// Handle the /200 route using the route200 handler
app.get("/200", route200);

// Handle the /no-content route using the noContentRoute handler
app.get("/no-content", noContentRoute);

app.post("/validate",validateResponse)

// Handle the /408 route using the route408 handler
app.get("/408", route408); 

// Handling invalid routes using Invalidmodule handler
app.use('/internal-error', serverError);
app.use("/*", Invalidmodule);  




// Start the server
app.listen(port, () => {
  console.log(`Server is active on port: ${port}`);
}).on('error', (err) => {
  console.error(`Error starting server: ${err}`);
});
