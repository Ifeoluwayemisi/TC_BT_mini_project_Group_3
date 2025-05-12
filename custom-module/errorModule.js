const Invalidmodule = (req, res) => {
    res.status(404).json({
      error: 'Resource could not be found',
    });
  };
export { Invalidmodule };