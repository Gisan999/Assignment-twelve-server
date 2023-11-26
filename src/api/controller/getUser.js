const users = require("../../models/users");


const getUser =  async (req, res) => {
    const result = await users.find();
    res.send(result);
}

module.exports = getUser