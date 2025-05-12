// export your module here e.g {indexRoute, yourNewModule}
      export {indexRoute};
      // routeModule.js
const route200 = (req, res) => {
  res.status(200).json({
    title: '200 OK',
    description: 'The request has succeeded.'
  });
};

export { route200 };
