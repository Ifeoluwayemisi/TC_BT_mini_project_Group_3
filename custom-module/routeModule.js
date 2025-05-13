// indexRoute function
const indexRoute = (req, res) => {
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
  