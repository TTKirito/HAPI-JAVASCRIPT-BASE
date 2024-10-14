export const up = async (knex) => knex.schema.createTable('salesmen', (table) => {
    table.increments('id').primary();
    table.string('firstName');
    table.string('lastName');
    table.string('phoneNumber').unique();
    // table.index('phoneNumber', 'phone_index_users');
    table.string('email');
    table.enu('gender', ['MALE', 'FEMALE']);
    table.string('verificationCode');
    table.boolean('isActive').defaultTo(true);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('deletedAt').defaultTo(null);
  });

export const down = async (knex) => knex.schema.dropTableIfExists('salesmen');
