const customRequest = require("../../models/customRequest");

const requestPost = async(req, res)=>{
    const request = req.body;

    try {
        const result = await customRequest.create(request);
        res.send(result);
    } catch (error) {
        console.error('Error adding menu item:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = requestPost;