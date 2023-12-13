const users = require("../../models/users");

const userData = async (req, res) =>{
    const email = req.params.email;
    try {
        const userCheck = await users.findOne({ email: email });
            res.send(userCheck);
    } catch (error) {
        // console.error('Error in adminCheck:', error);
        // res.status(500).send({ message: 'Internal server error' });
    }
}

module.exports = userData