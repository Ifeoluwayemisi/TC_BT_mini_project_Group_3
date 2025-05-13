// Follow the format below to create your module according to your specification
// Dont forget to use diffrent variable from the existing variable

//Imported express, express middleware using modules according to ejs

import express from "express";

const app = express();

app.use(express.json());

// indexRoute function
const indexRoute = (req, res) => {
  res.send("Welcome to group 3 mini project");
};

//Handling Incomplete, invalid or broken responses #statusCode: 400

const validateResponse = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).send("Response incomplete, All fields are required");
  }

  if (name === "" || email === "" || password === "") {
    res.status(400).send("Fields cannot be empty");
  }
};
// export your module here e.g {indexRoute, yourNewModule}
export { indexRoute };
export { validateResponse };

    res.send("Welcome to group 3 mini project");
  }
  
  // route200 function
  const route200 = (req, res) => {
    res.status(200).json({
      title: '200 OK',
      description: 'The request has succeeded.'
    });
  }
  
  // Route Handler for handling resource creation
  const createResource = (req, res) => {
    const newResource = {
      id: Date.now(),
      ...req.body
    };
  
    res.status(201).json({
      message: "Resource created successfully",
      data: newResource
    });
  }
  
  // New Route Handler for No Content (204)
  const noContentRoute = (req, res) => {
    res.status(204).send();  
  };
  
  // Export modules
  export { indexRoute, route200, createResource, noContentRoute };
  