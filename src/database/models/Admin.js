import BaseModel from './BaseModel';
import Role from './Role';

export default class Admin extends BaseModel {
  static $hidden = ['password'];

  static get tableName() {
    return 'administrators';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get relationMappings() {
    return {
      role: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Role,
        join: {
          from: 'administrators.roleId',
          to: 'roles.id',
        },
      },
    };
  }
}
