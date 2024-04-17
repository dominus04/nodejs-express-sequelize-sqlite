const Services = require('./Services.js');

class PersonServices extends Services{
    constructor(){
        super('Person');
    }

    async getFullStudentById (id) {
        const student = await super.getRecordById(id);
        const enrolledCourses = await student.getEnrolledCourses();
        
        return {...student['dataValues'], enrolledCourses};
    }

    async getAllEnrollsById(id){
        const student = await super.getRecordById(id);
        const enrolls = await student.getEnrollsById();

        return enrolls;
    }

    async getAllPersonsScoped(){
        const personsList = await super.getRecordsByScope('allRecords');
        return personsList;
    }
}

module.exports = PersonServices;