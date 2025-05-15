Express.js Mini Project – Group 3


## Overview
This document outlines the steps taken to set up the Express.js mini project and install necessary modules.

## POST_MAN_URL
You can explore and test all the available API routes using the Postman collection below:
👉 [View Mini Project API - Group 3 Collection](https://racheal-7945544.postman.co/workspace/Racheal's-Workspace~c520a5ae-00d9-420a-8bb6-cec29e341f7d/collection/43458703-bde3d354-1194-4ed1-8673-fae89ae7036c?action=share&creator=43458703).

### Included API Routes:

* `GET /`
Returns a welcome message to confirm the server is running.


* `POST /create`
Creates a new resource with the data sent in the request body.


* `GET /200`
Returns a simple success message (HTTP 200).


* `GET /no-content`
Returns a 204 No Content status with no response body.


* `GET /validate and POST /validate`
Validates input data sent via query or body, responding with success or error status.


* `GET /408`
Simulates a request timeout (HTTP 408).


* `GET /503`
Simulates a service unavailable error (HTTP 503).


* `POST /405`
Returns a method not allowed error (HTTP 405).


* `GET /internal-error`
Simulates an internal server error (HTTP 500).


* `Any other routes (*)`
Return a 404 Not Found response for invalid endpoints.


## Prerequisites
Ensure the following are installed on your system:
- Node.js 
- npm (Node Package Manager) 

## Project Setup
1. Initialize a new Node.js project: Run `npm init` in the terminal to create a package.json file.
2. Install Express.js: Run `npm install express` to install the Express.js framework.
3. Create a new Express.js app: Create a new file (e.g., app.js) and add the basic Express.js app code.

## Installed Modules
The following modules are installed for this project:
- `express`: The Express.js framework
- `morgan`: For logging HTTP requests

To install these modules, run the following commands:
```bash
npm init
npm install morgan
npm install express
```

## The project structure is as follows:

```bash
TC_BT_MINI_PROJECT_GROUP_3/
├── app.js
├── package-lock.json
├── package.json
├── README.md
└── custom-module/
    ├── routeModule.js
    ├── errorModule.js
    ├── 408route.js
    ├── 405error.js
    └── 500error.js
```

## Scripts

The following scripts are added to the `package.`json`file:
"scripts": {
  "start": "node app.js"
}

Run the app using:
npm start

## Script Details

| Script  | Command       | Purpose                             |
| ------- | ------------- | ----------------------------------- |
| `start` | `node app.js` | Start the server in production mode |
