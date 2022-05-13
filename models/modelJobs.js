const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:Sunita1234@localhost:5432/hr"
);

const Job = sequelize.define(
  "jobs",
  {
    jobId: {
      field: "job_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    jobTitle: {
      field: "job_title",
      type: DataTypes.STRING,
    },
    minSalary: {
      field: "min_salary",
      type: DataTypes.STRING,
    },
    maxSalary: {
      field: "max_salary",
      type: DataTypes.INTEGER,
    }
   
  },
  {
    timestamps: false,
    associate: function (models) {
      Job.hasMany(models.Employee, { foreignKey: "job_id" });
    },
  }
);

module.exports = Job;