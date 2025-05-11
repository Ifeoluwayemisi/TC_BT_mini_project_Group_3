
const route408 = (req, res) => {
    res.status(408).send("Request Timeout.");
}

export {route408};