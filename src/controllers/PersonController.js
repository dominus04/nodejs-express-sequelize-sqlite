const PersonServices = require('../services/PersonServices.js');
const Controler = require('./Controller.js');

const personServices = new PersonServices();

class PersonController extends Controler{
    constructor(){
        super(personServices);
    }
    
    async getOneById(req, res){
        const { id } = req.params;
        try {
            const enrollmentList = await personServices.getFullStudentById(Number(id));
            res.status(200).json(enrollmentList);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getAllPersons(req, res){
        try {
            const personsList = await personServices.getAllPersonsScoped();
            res.status(200).json(personsList);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getEnrollsById(req, res){
        try {
            const id = Number(req.params.studentId);
            const enrolls = await personServices.getAllEnrollsById(id);
            res.status(200).json(enrolls);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}


module.exports = PersonController;