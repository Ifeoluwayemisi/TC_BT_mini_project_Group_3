import express from 'express';
const app = express();

// Import the necessary modules from routeModule.js
import { indexRoute, route200 } from './custom-module/routeModule.js';  
import { Invalidmodule } from './custom-module/errorModule.js';         
const port = 5000;

// Middleware for parsing JSON requests
app.use(express.json());

// Define the / route using the indexRoute handler
app.get("/", indexRoute);

// Define the /200 route using the route200 handler
app.get("/200", route200);

// Handle invalid routes using Invalidmodule
app.use("/*false", Invalidmodule);

// Start the server
app.listen(port, () => {
  console.log(`Server is active on port: ${port}`);
}).on('error', (err) => {
  console.error(`Error starting server: ${err}`);
});
