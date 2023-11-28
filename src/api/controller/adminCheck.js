const users = require("../../models/users");

const adminCheck = async (req, res) => {
    const email = req.params.email;
    // console.log(email);

    // if (email !== req.decoded.email) {
    //     return res.status(403).send({ message: 'forbidden access' });
    // }

    try {
        const userCheck = await users.findOne({ email: email });

        // if (!userCheck) {
        //     return res.status(404).send({ message: 'User not found' });
        // }

        const admin = userCheck.role === 'admin';
        if (admin) {

            res.send({ admin });
        } else {

            // return res.status(403).send({ message: 'forbidden access' });

        }

    } catch (error) {
        console.error('Error in adminCheck:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

module.exports = adminCheck;