"use strict";
module.exports = (sequelize, DataTypes) => {
  const adopter = sequelize.define(
    "adopter",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postcode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dogId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  adopter.associate = function (models) {
    //adopter.hasMany(models.dog);
    adopter.belongsTo(models.dog);
  };
  return adopter;
};
