

class Controler{
    constructor(serviceEntity){
        this.serviceEntity = serviceEntity;
    }

    async getAll(req, res){
        try {
            const recordList = await this.serviceEntity.getAllRecords();
            res.status(200).json(recordList);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getOneById(req, res){
        const id = req.params.id;
        try {
            const record = await this.serviceEntity.getRecordById(Number(id));
            res.status(200).json(record);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async createNew(req, res){
        const data = req.body;
        try {
            const newRecord = await this.serviceEntity.createRecord(data);
            res.status(201).json(newRecord);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async update(req, res){
        const id = req.params.id;
        const newData = req.body;
        try {
            const updated = await this.serviceEntity.updateRecord(Number(id), newData);
            if(!updated){
                res.status(400).json({message: "This record was not updated."});
            }
            res.status(200).json({message: "Record updated!"});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async delete(req, res){
        const id = req.params.id;
        try {
            await this.serviceEntity.deleteRecord(Number(id));
            res.status(200).json({message: `Record with id ${id} was successfully deleted.`})
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

}

module.exports = Controler