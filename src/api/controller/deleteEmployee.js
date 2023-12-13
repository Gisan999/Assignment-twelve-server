const myEmployeeList = require("../../models/myEmployee");

const deleteEmployee = async (req, res) => {
    const id = req.params.id;
    try{
        const result = await myEmployeeList.deleteOne({_id: id});
        res.send(result);
    } catch(error){
        console.error('Error deleting document:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}
module.exports = deleteEmployee;