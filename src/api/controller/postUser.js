const users = require("../../models/users");

const postUser = async (req, res) => {
    const userData = req.body;
    const query = { email: userData.email };

    try {
        const existingUser = await users.findOne(query);

        if (existingUser) {
            return res.send({ message: 'User already exists', insertedId: null });
        }

        const newUser = new users(userData);
        const result = await newUser.save();

        res.send({ message: 'User created successfully', insertedId: result._id });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = postUser;