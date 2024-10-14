import BaseModel from './BaseModel';

export default class Salesman extends BaseModel {
  static $hidden = ['password'];

  static get tableName() {
    return 'salesmen';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get relationMappings() {
    return {};
  }
}
