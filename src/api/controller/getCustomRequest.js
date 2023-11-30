const customRequest = require("../../models/customRequest");

const getCustomRequest = async (req, res) => {
    const result = await customRequest.find();
    res.send(result);
}
module.exports = getCustomRequest;