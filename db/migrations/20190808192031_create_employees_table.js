
exports.up = async function(knex) {
    if (! (await knex.schema.hasTable('employees'))) {
        await knex.schema.createTable('employees', table => {
            table.increments('id').primary();
            table.string('first_name', 100);
            table.string('last_name', 100);
            table.string('department', 50);
            table.string('title', 50);
            table.string('email');
            table.string('phone_number', 20);
            table.jsonb('location');
        });
    }
};

exports.down = async function(knex) {
    await knex.schema.dropTable('employees');
};
