import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import logger from '../utils/Winston';

export default class SwaggerPlugin {
  setting() {
    const swaggerOptions = {
      host: process.env.HOST || `${process.env.APP_HOST}:${process.env.APP_PORT}`,
      basePath: '/api/v1',
      pathPrefixSize: 1,
      info: {
        title: 'ReesNextPlus API Documentation',
        version: '1.0',
      },
      securityDefinitions: {
        Bearer: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
      security: [{ Bearer: [] }],
      swaggerUI: true,
      documentationPage: process.env.NODE_ENV !== 'production',
      documentationPath: process.env.SWAGGER_ROUTE || '/docs',
    };
    this.plugins = [
      {
        plugin: Inert,
      },
      {
        plugin: Vision,
      },
      {
        plugin: HapiSwagger,
        options: swaggerOptions,
      },
    ];
  }

  async register(server) {
    this.setting();
    try {
      server.register(this.plugins);
    } catch (error) {
      logger.error('Error registering swagger plugin : ', error);
    }
  }
}
