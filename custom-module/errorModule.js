const Invalidmodule = (req, res) => {
    res.status(404).json({message: 'Resource could not be found',});
  };
export { Invalidmodule };