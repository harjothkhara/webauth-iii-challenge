//defining what my table will contain
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
        // user id
      table.increments();
      // other values
      table
        .string("username", 128)
        .notNullable()
        .unique;
        //password
      table.string("password", 100).notNullable();
        //department
      table.string("department", 40).notNullable(); 
  });
};
//defining how we empty the table if we need to
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
};
