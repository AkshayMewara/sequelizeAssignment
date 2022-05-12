const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:Sunita1234@localhost:5432/hr') 

const Employee = sequelize.define('employees', {
    employeeId: {
        field: 'employee_id',
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    firstName: {
        field: 'first_name',
        type: DataTypes.STRING
    },
    lastName: {
        field: 'last_name',
        type: DataTypes.STRING
    },
    jobId: {
        field: 'job_id',
        type: DataTypes.INTEGER
    },
    email: {
        field: 'email',
        type: DataTypes.STRING
    },
    departmentId: {
        field: 'department_id',
        type: DataTypes.INTEGER,
        references: {
            model: 'departments',
            key: 'department_id',
        }
    }
// }, {
//     timestamps: false,
//     associate: function (models) {
//         Employee.belongsTo(models.Department, { foreignKey: "department_id" });
//     },
})

module.exports = Employee;