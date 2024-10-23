const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "John Doe",
          email: "john@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down() {},
};
