const assetsAdmin = require("../../models/adminAsset");


const getAdminAsset = async (req, res) => {
    const email = req.query.email;
    const query = { email: email };
    try {
        const result = await assetsAdmin.find(query).sort({quantity: 1});
        res.send(result);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = getAdminAsset;