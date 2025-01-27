const config = {
  server: {
    host: '0.0.0.0',
    port: 3000,
    jwtSecret: 'base-api',
    jwtExpiration: '1h',
  },
  bcrypt: {
    saltRounds: 5,
  },
};

const developmentConfig = Object.assign(config, {});

const stagingConfig = Object.assign(config, {});

const productionConfig = Object.assign(config, {});

const testingConfig = Object.assign(config, {
  server: {
    host: '0.0.0.0',
    port: 4000,
    jwtSecret: 'base-test',
    jwtExpiration: '1h',
  },
});

export default {
  developmentConfig,
  stagingConfig,
  testingConfig,
  productionConfig,
};
