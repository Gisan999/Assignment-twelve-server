
const assetsAdmin = require("../../models/adminAsset");

const postAdminAsset = async (req, res) => {
    const Data = req.body;
    try {
        const newData = new assetsAdmin(Data);
        const result = await newData.save();

        res.send({ message: 'Asset Posted successfully', insertedId: result._id });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = postAdminAsset;