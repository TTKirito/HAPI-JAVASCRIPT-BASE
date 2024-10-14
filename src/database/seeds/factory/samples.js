import faker from 'faker';
import * as _ from 'lodash';
import Customer from '../../models/Customer';

class Sample {
  createSalesmen = (data) => {
    const gender = _.sample(Object.values(Customer.GENDER));
    return {
      ...data,
      firstName: faker.name.firstName(gender === 'MALE' ? 1 : 0),
      lastName: faker.name.lastName(gender === 'MALE' ? 1 : 0),
      email: faker.internet.email(),
      gender,
    };
  };
}

export default new Sample();
