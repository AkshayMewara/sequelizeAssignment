const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:Sunita1234@localhost:5432/hr"
);

const Location = sequelize.define(
  "location",
  {
    location_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    street_address: {
      type: DataTypes.STRING,
    },
    postal_code: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state_province: {
      type: DataTypes.STRING,
    },
    country_id: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    associate: function (models) {
      Location.hasMany(models.departments, { foreignKey: "location_id" });
    },
  }
);

module.exports = Location;
