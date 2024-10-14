export const up = async (knex) => knex.schema.createTable('administrators', (table) => {
    table.increments('id').primary();
    table.integer('roleId');
    table.foreign('roleId').references('roles.id');
    table.string('firstName');
    table.string('lastName');
    table.string('phoneNumber').unique();
    // table.index('phoneNumber', 'phone_index_users');
    table.string('email');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('deletedAt').defaultTo(null);
  });

export const down = async (knex) => knex.schema.dropTableIfExists('administrators');
