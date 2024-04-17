'use strict';
const isCpfValid = require('../../utils/validateCpfHelper.js');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: 'teacher_id'
      });
      Person.hasMany(models.Enrollment, {
        foreignKey: 'student_id',
        scope: {status: 'enrolled'},
        as: 'enrolledCourses'
      });
      Person.hasMany(models.Enrollment, {
        foreignKey: 'student_id',
        as: 'EnrollsById'
      })
    }
  }
  Person.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {args: [3,30], msg:"The 'name' requires at least of 3 characters."}
      }
    },
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: {args: true, msg:"The email entered is invalid."}
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate:{
        cpfIsValid: (cpf) => {
          if(!isCpfValid(cpf)) throw new Error("Invalid cpf number");
        }
      }
    },
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'persons',
    paranoid: true,
    defaultScope: {
      where: {active: true,}
    },
    scopes:{
      allRecords:{
        where: {}
      }
    }
  });
  return Person;
};