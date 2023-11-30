const assetRequest = require("../../models/postGetRequest");

const getRequest = async (req, res) => {
    try {
        const result = await assetRequest.find();
        res.send(result);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = getRequest;