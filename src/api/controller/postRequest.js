const assetRequest = require("../../models/postGetRequest");

const postRequest = async(req, res)=>{
    const requestPost = req.body;

    try {
        const result = await assetRequest.create(requestPost);
        res.send(result);
    } catch (error) {
        console.error('Error adding menu item:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = postRequest;