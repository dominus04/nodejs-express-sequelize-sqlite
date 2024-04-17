const CourseServices = require('../services/CourseServices.js');
const Controler = require('./Controller.js');

const courseServices = new CourseServices();

class CourseController extends Controler{
    constructor(){
        super(courseServices);
    }
}

module.exports = CourseController;