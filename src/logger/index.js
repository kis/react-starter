import * as bunyan from 'browser-bunyan';

const lvl = Number(process.env.LOG_LEVEL);
const logLevel = bunyan.resolveLevel(lvl);

const logger = bunyan.createLogger({ name: 'ontour360', level: logLevel, src: true });

export default logger;
