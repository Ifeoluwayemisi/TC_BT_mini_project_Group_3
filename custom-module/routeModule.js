
// Follow the format below to create your module according to your specification
// Dont forget to use diffrent variable from the existing variable
const indexRoute = (req, res) => {
    res.send("Welcome to group 3 mini project");
}

// Route Hadler for handling resource
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
// export your module here e.g {indexRoute, yourNewModule}
      export {indexRoute, createResource};
