
import express from 'express';
const app = express();
// Create your module in routeModule.js inside custom-module folder
// add your module below e.g {indexRoute, yourNewModule}
import {route200} from './custom-module/routeModule.js';
const port = 5000;
// Middleware
app.use(express.json());

// Follow the format below to create your route and your module as defined in routeModule.js file
app.get("/200", route200)


// Server 
app.listen(port, () => {
    console.log(`Server is active on port: ${port}`);
}).on('error', (err) => {
    console.error(`Error starting server: ${err}`);
});