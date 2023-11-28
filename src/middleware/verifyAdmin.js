const users = require("../models/users");

const verifyAdmin = async (req, res, next) => {
    const email = req.decoded.email;
    const query = { email: email };
    const verifyUser = await users.findOne(query);
    const isAdmin = verifyUser?.role === 'admin';
    // if (!isAdmin) {
    //     return res.status(403).send({ message: 'forbidden access' });
    // }
    if (isAdmin) {

        next();
    }
}

module.exports = verifyAdmin;