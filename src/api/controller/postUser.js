const users = require("../../models/users");

const postUser = async (req, res) => {
    const user = req.body;
    const query = { email: user.email };
    const existingUser = await users.findOne(query);
    if (existingUser) {
        return res.send({ message: 'user already exists', insertedId: null })
    }
    const result = await users.insertOne(user);
    res.send(result);
}

module.exports = postUser;