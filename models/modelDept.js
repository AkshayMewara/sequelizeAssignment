const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:Sunita1234@localhost:5432/hr') 

const Department = sequelize.define('department',{
    department_id: {
        type : DataTypes.INTEGER,
        primaryKey : true
    },
    department_name : {
        type : DataTypes.STRING 
    },
    location_id : {
        type : DataTypes.INTEGER
    }
// }, {
//     timestamps: false,
//     associate: function (models) {
//         Department.hasMany(models.employees, { foreignKey: "department_id" });
//     },
})

module.exports = Department;