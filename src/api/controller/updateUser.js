const users = require("../../models/users");

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    const query =   userData.adminEmail ;

    const updateData = {
        $set: {
            team: 'yes',
            adminEmail: query
        }
    };
    const options = {
        upsert: true,
        new: true
    };

    try {
        const result = await users.findByIdAndUpdate(userId, updateData, options);

        if (result) {

            res.send(result);
        }

    } catch (error) {
        console.error('Error updating or adding', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }

}

module.exports = updateUser;