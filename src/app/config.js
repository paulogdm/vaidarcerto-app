import path from 'path';

const env = process.env.NODE_ENV || 'development';

const configs = {
  all: {
    env,
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 3000,
    ip: process.env.IP || '0.0.0.0',
    facebook: process.env.facebook,
    globalSettings: process.env.globalSettings,
    covid19: process.env.covid19,
    fullTextSearch: process.env.fullTextSearch,
  },
  development: () => ({
    ip: process.env.IP || '127.0.0.1',
  }),
  production: () => ({
    //
  }),
}

const config = Object.assign(configs.all, configs[env]);

export default config;
