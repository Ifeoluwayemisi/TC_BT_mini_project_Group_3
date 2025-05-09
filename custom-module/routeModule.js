
// Follow the format below to create your module according to your specification
// Dont forget to use diffrent variable from the existing variable

const indexRoute = (req, res) => {
    res.send("Welcome to group 3 mini project");
}


const noContentRoute =(req,res)=>{
    res.status(204).send()
}
// export your module here e.g {indexRoute, yourNewModule}
module.exports = {indexRoute,noContentRoute};

