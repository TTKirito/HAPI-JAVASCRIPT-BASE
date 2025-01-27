import logger from '../utils/Logging';

export default function banner() {
  const route = () => `http://${process.env.APP_HOST || 'localhost'}:${process.env.APP_PORT}`;
  if (process.env.NODE_ENV !== 'development') {
    logger.info('');
    logger.info('To shut it down, press <CTRL> + C at any time.');
    logger.info('');
    logger.info('-------------------------------------------------------');
    logger.info(`Environment  : ${process.env.NODE_ENV || 'development'}`);
    logger.info(`Version      : ${process.env.VERSION}`);
    logger.info('');
    logger.info(`Swagger      : ${route()}${process.env.SWAGGER_ROUTE}`);
    logger.info('-------------------------------------------------------');
    logger.info('');
  } else {
    logger.info(`> Server is running at: ${route()}`);
  }
}
