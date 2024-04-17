const EnrollmentServices = require('../services/EnrollmentServices.js');
const Controler = require('./Controller.js');

const enrollmentServices = new EnrollmentServices();

class EnrollmentController extends Controler{
    constructor(){
        super(enrollmentServices);
    }
}

module.exports = EnrollmentController;