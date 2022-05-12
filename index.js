const express = require("express");
const app = express();
const port = 4000;
const db = require("./db");
const Employee = require("./models/model");
const Department = require('./models/modelDept')
const { Op } = require('sequelize')

app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log(error);
  });

app.get("/employees", async (req, res) => {
  try {
      Employee.belongsTo(Department,{foreignKey:'department_id'});
      Department.hasMany(Employee,{foreignKey:'department_id'});
    const employees = await Department.findAll({
    attributes : [ [db.col('department_name'),'DEPARTMENTNAME']], 
    include : [ 
        {
        model : Employee, 
        attributes : ['lastName'], 
           where : {
               last_name : { [Op.like] : '%a%'}
           }
        }
    ], 
    });
    res.send(employees);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`server is alive on port ${port}`);
});
