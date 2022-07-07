const winston = require('winston');

let logger = null;

logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.json()
    ),
transports: [
    new winston.transports.File({ filename: 'logs/app.log', level: 'info' }),
]
});

module.exports = logger;