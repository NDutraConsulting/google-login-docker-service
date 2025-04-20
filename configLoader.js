let configFile = 'config.json';
    if (process.env.NODE_ENV === 'development') {
      configFile = 'config.development.json';
    } else if (process.env.NODE_ENV === 'production') {
        configFile = 'config.production.json'
    }

const config = require('./config/' + configFile);

module.exports = config;