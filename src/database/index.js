import Sequelize from 'sequelize';

import User from '../app/models/User';
import Files from '../app/models/Files';

import databaseConfig from '../config/database';

const models = [User, Files];

class Databse {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Databse();
