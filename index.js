const express = require("express");
const app = express();
const port = 8000;
const db = require("./db");
const Employee = require("./models/model");
const Department = require("./models/modelDept");
const Location = require("./models/modelLocation");
const Job = require("./models/modelJobs");
const { Op } = require("sequelize");

app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log(error);
  });

app.get("/employees/department-location-job", async (req, res) => {
  try {
    Employee.belongsTo(Department, { foreignKey: "department_id" });
    Department.hasMany(Employee, { foreignKey: "department_id" });
    Department.belongsTo(Location, { foreignKey: "location_id" });
    Location.hasMany(Department, { foreignKey: "location_id" });
    Employee.belongsTo(Job, { foreignKey: "job_id" });
    Job.hasMany(Employee, { foreignKey: "job_id" });

    const employees = await Location.findAll({
      attributes: ["city"],
      include: [
        {
          model: Department,
          attributes: ["department_id", "department_name"],
          include: [
            {
              model: Employee,
              attributes: ["last_name"],
              include: [
                {
                  model: Job,
                  attributes: ["jobTitle"],
                },
              ],
            },
          ],
        },
      ],
      where: {
        city: { 
          [Op.or]: [
            { [Op.like]: "Toronto" },
             { [Op.like]: "toronto" }
            ] 
          },
        // { [Op.like]: "Toronto" },
      },
    });
    res.send(employees);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`server is alive on port ${port}`);
});
