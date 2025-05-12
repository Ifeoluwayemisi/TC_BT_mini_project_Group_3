// Custom-module/routeModule.js

// indexRoute function
const indexRoute = (req, res) => {
    res.send("Welcome to group 3 mini project");
  }
  
  // route200 function from get-request branch
  const route200 = (req, res) => {
    res.status(200).json({
      title: '200 OK',
      description: 'The request has succeeded.'
    });
  };
  
  // Export modules
  export { indexRoute, route200 };
  