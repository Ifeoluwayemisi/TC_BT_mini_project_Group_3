import express from 'express';
const app = express();
<<<<<<< HEAD

// Import the necessary modules from routeModule.js
import { indexRoute, route200, createResource, noContentRoute } from './custom-module/routeModule.js';
import { Invalidmodule } from './custom-module/errorModule.js';
import { route408 } from './custom-module/408route.js'; 

=======
// Create your module in routeModule.js inside custom-module folder
// add your module below e.g {indexRoute, yourNewModule}
import serverError from './custom-module/500error.js';
import {indexRoute} from './custom-module/routeModule.js';
>>>>>>> origin/implement-500-error
const port = 5000;

// Middleware for parsing JSON requests
app.use(express.json());
app.use('/internal-error', serverError);

<<<<<<< HEAD
// Handle the / route using the indexRoute handler
app.get("/", indexRoute);

// Handle the /create route using the createResource handler
app.post("/create", createResource);

// Handle the /200 route using the route200 handler
app.get("/200", route200);

// Handle the /no-content route using the noContentRoute handler
app.get("/no-content", noContentRoute);

// Handle the /408 route using the route408 handler
app.get("/408", route408); 

// Handling invalid routes using Invalidmodule handler
app.use("*", Invalidmodule);  
=======
// Follow the format below to create your route and your module as defined in routeModule.js file
// routes 500 error
app.get("/", indexRoute);
app.use("/internal-error", serverError);
>>>>>>> origin/implement-500-error



// Start the server
app.listen(port, () => {
  console.log(`Server is active on port: ${port}`);
}).on('error', (err) => {
  console.error(`Error starting server: ${err}`);
});
