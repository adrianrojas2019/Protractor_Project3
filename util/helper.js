'use strict'
var log4js = require('log4js')
var log4jsGen = {
    getLogger : function(){
        log4js.configure({
            appenders:{'file':{type: 'file', filename: './logs/file.log' } },
            categories: { default: {appenders: ['file'], level: 'debug'}}
        })
        const logger = log4js.getLogger()
        return logger
    }
}
module.exports = log4jsGen