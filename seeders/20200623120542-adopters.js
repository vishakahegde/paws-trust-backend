"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "adopters",
      [
        {
          name: "testuser",
          email: "test@test.com",
          phone: "123456981",
          address: "20, Niuwezijds Kolk",
          city: "Amsterdam",
          province: "Noord-Holland",
          postcode: "1012NB",
          country: "Netherlands",
          dogId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          email: "dummy@dummy.com",
          phone: "5678990945",
          address: "27C, Westerkerk",
          city: "Amsterdam",
          province: "Noord-Holland",
          postcode: "1016LR",
          country: "Netherlands",
          dogId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chetan",
          email: "chetan@chetan.com",
          phone: "2763236982",
          address: "157, Achilestraat",
          city: "Almere",
          province: "Flevoland",
          postcode: "1363VM",
          country: "Netherlands",
          dogId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Groot",
          email: "groot@groot.com",
          phone: "3873236982",
          address: "238, Korte Jansstraat",
          city: "Utrecht",
          province: "Utrecht",
          postcode: "3512JE",
          country: "Netherlands",
          dogId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("adopters", null, {});
  },
};
