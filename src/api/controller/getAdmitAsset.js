const assetsAdmin = require("../../models/adminAsset");


const getAdminAsset = async (req, res) => {
  
    try {
        const result = await assetsAdmin.find().sort({quantity: 1});
        res.send(result);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = getAdminAsset;