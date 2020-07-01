"use strict";
module.exports = (sequelize, DataTypes) => {
  const dog = sequelize.define(
    "dog",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      aboutMe: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      breed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  dog.associate = function (models) {
    dog.hasMany(models.adopter);
  };
  return dog;
};
