const express = require('express');
const app =express();
// Create your module in routeModule.js
// add your module below e.g {indexRoute, yourNewModule}
const {indexRoute} = require("./custom-module/routeModule");
const port = 5000;
// Middleware
app.use(express.json());

// Follow the format below to create your route and your module as defined in routeModule.js file
app.get("/", indexRoute)


// Server 
app.listen(port, () => {
    console.log(`Server is active on port: ${port}`);
})