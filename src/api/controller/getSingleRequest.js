const customRequest = require("../../models/customRequest");

const singleRequest = async (req, res) => {
    const id = req.params.id;
    console.log(id);

    const result = await customRequest.findById(id);
    res.send(result);

}
module.exports = singleRequest;