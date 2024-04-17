const CategoryServices = require('../services/CategoryServices.js');
const Controler = require('./Controller.js');

const categoryServices = new CategoryServices();

class CategoryController extends Controler{
    constructor(){
        super(categoryServices);
    }
}

module.exports = CategoryController;