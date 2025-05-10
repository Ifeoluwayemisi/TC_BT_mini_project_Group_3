import express from 'express';
import { route408 } from './custom-module/408route.js';
const app = express();
// Create your module in routeModule.js inside custom-module folder
// add your module below e.g {indexRoute, yourNewModule}
const port = 5000;
// Middleware
app.use(express.json());

// Follow the format below to create your route and your module as defined in routeModule.js file
app.get("/408", route408)


// Server 
app.listen(port, () => {
    console.log(`Server is active on port: ${port}`);
}).on('error', (err) => {
    console.error(`Error starting server: ${err}`);
});