const logger = require('./log');
const app = require('./src/server');
const valor = require("./public/index");
//const app = require('./src/server');

app.listen(3000);
logger.info("Infomação enviada");
//logger.error("TESTE ERROR");
//logger.debug("TESTE DEBUG");
//logger.warn("TESTE WARN");

