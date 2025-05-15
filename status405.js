// Define allowed HTTP methods for each route
const allowedMethods = {
  "/status/ok": ["GET"],
};

// Route that supports only GET
app.get("/status/ok", (req, res) => {
  res.json({
    title: "200 OK",
    description: "GET method is allowed on this route.",
  });
});

// Middleware to check for unsupported methods
app.use((req, res, next) => {
  const methods = allowedMethods[req.path];

  // this checks if route exists but method is not allowed
  if (methods && !methods.includes(req.method)) {
    return res.status(405).json({
      title: "405 Method Not Allowed",
      description: `Method ${req.method} not allowed on ${req.path}`,
    });
  }

  next(); 
});
