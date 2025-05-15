// Follow the format below to create your module according to your specification
// Dont forget to use diffrent variable from the existing variable

//Imported express, express middleware using modules according to ejs

import express from "express";

// indexRoute function
const indexRoute = (req, res) => {
  res.send("Welcome to group 3 mini project");
};

//Handling Incomplete, invalid or broken responses #statusCode: 400

const validateResponse = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Response incomplete, All fields are required");
  }

  if (name === "" || email === "" || password === "") {
    return res.status(400).send("Fields cannot be empty");
  }

  return res.send("All fields are valid");
};


  
  
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

 // serviceUnavailable 

const serviceUnavailable = (req, res) => {
  res.status(503).json({
    error: "Service Unavailable",
    message: "The server is currently unable to handle the request due to temporary overload or maintenance."
  });
};


  
  // Export modules
  export { indexRoute, route200, createResource, noContentRoute,validateResponse,serviceUnavailable };
  