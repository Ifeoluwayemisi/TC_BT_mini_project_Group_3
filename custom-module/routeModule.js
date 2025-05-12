
// Follow the format below to create your module according to your specification
// Dont forget to use diffrent variable from the existing variable
const indexRoute = (req, res) => {
    res.send("Welcome to group 3 mini project");
}
const serviceUnavailableHandler = (req, res) => {
    res.status(503).json({
        message: "Service temporarily Unavailable. Please try again later"
    });
};

// export your module here e.g {indexRoute, yourNewModule}
      export {indexRoute, serviceUnavailableHandler};
