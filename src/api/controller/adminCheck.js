const users = require("../../models/users");

const adminCheck = async (req, res) => {
    const email = req.params.email;
    // console.log(email);

    try {
        const userCheck = await users.findOne({ email: email });

        const admin = userCheck.role === 'admin';

        if (!admin) {
            return res.send({ message: 'User not a admin'});
        }

        if (admin) {
            res.send({ admin });
        }

    } catch (error) {
        // console.error('Error in adminCheck:', error);
        // res.status(500).send({ message: 'Internal server error' });
    }
}

module.exports = adminCheck;



