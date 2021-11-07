exports.up = function(knex) {
    return knex.raw(`
      CREATE TABLE logs (
        id serial PRIMARY KEY,
        endpoint varchar(100),
        createdAt timestamp,
        parameters json
      );
    `)
  };
  
  exports.down = function(knex) {
    return knex.raw(`
      DROP TABLE logs;
    `)
  }