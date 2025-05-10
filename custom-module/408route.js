
const route408 = (req, res) => {
    res.status(408).send("Request timeout.");
}

export {route408};