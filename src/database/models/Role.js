import BaseModel from './BaseModel';

export default class Role extends BaseModel {
  static get tableName() {
    return 'roles';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get relationMappings() {
    return {};
  }
}
