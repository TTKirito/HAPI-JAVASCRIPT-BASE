import BaseModel from './BaseModel';

export default class Customer extends BaseModel {
  static $hidden = ['password'];

  static GENDER = {
    male: 'MALE',
    female: 'FEMALE',
  };

  static get tableName() {
    return 'customers';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get relationMappings() {
    return {};
  }
}
