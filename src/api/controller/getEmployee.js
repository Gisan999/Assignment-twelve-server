const myEmployeeList = require("../../models/myEmployee");

const getEmployee = async (req, res) => {
    const email = req.query.email;
    const query = { adminEmail: email };
    try {
        const result = await myEmployeeList.find(query);
        res.send(result);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = getEmployee;