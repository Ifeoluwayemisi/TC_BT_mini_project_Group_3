// Follow the format below to create your module according to your specification
// Dont forget to use diffrent variable from the existing variable

//Imported express, express middleware using modules according to ejs

import express from "express";

const app = express();

app.use(express.json());

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
