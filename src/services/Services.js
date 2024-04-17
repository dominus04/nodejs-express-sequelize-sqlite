const db = require('../database/models');

class Services{
    constructor(modelName){
        this.model = modelName;
    }

    async getAllRecords(){
        return db[this.model].findAll();
    }

    async getRecordsByScope(scope){
        return db[this.model].scope(scope).findAll();
    }

    async getRecordById(id){
        return db[this.model].findByPk(id);
    }

    async createRecord(data){
        return db[this.model].create(data);
    }

    async updateRecord(id, data){
        const updated = db[this.model].update(data, {
            where: {id: id}
        });
        if(updated[0] === 0)
            return false;
        return true;
    }

    async deleteRecord(id){
        return db[this.model].destroy({
            where:{
                id: id
        }});
    }
}

module.exports = Services;