import Factory from './factory';
import Customer from '../models/Customer';
import Role from '../models/Role';
import Admin from '../models/Admin';
import Salesman from '../models/Salesman';

exports.seed = async (knex) => {
  await Promise.all([
    knex('roles').del(),
    knex('customers').del(),
    knex('salesmen').del(),
    knex('administrators').del(),
  ]);
  await Role.query().insertGraph([
    {
      name: 'superadmin',
      description: 'super admin has all power',
    },
    {
      name: 'admin',
      description: 'admin of each cluster',
    },
  ]);
  await Salesman.query().insertGraph(await Factory.salesmen());
  await Customer.query().insertGraph(await Factory.customers());
  await Admin.query().insertGraph(await Factory.admins());
};
