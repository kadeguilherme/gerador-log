const { createLogger, format, transports } = require('winston');
const winston = require('winston/lib/winston/config');
const { combine, timestamp, printf } = format;

let logger = null;
;

const myFormat = printf(({level, message , timestamp}) =>{
    return `time=${timestamp}  log_level=${level.toUpperCase()} name=index threadName=MainTread message=${message}`; 
});

logger = createLogger({
    level: "silly",
    format: combine(
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        myFormat
    ),
transports: [
    new transports.File({ filename: 'logs/app.log', level: 'silly' }),
]
});

module.exports = logger;