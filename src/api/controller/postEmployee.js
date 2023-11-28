const myEmployeeList = require("../../models/myEmployee");


const postEmployee = async (req, res) => {
    const employee = req.body;

    try {
        const result = await myEmployeeList.create(employee);
        res.send(result);
    } catch (error) {
        console.error('Error adding menu item:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = postEmployee;