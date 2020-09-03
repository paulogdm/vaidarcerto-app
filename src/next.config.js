const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { parsed: localEnv } = require('dotenv').config();

const pkg = require('../package.json');

const withKeys = (obj, add_it, drop_it = []) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const have_it = add_it.some(s => key.startsWith(s));
    const dont_have_it = !drop_it.some(s => key.startsWith(s));

    if (have_it && dont_have_it) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

const isDev = process.env.NODE_ENV === "development";
const isDevCI = process.env.DEV_CI || false; // in case running on emulator
const arrWithKeys = ['REACT_APP_'];
const useEnvs = isDev ? localEnv : withKeys(process.env, arrWithKeys);

const getEnvValue = name => {
  if (typeof name === "string" && !name.startsWith('REACT_APP_')) {
    name = `REACT_APP_${name}`;
  }
  if (!useEnvs[name] && !useEnvs.CI) {
    throw new Error(`You must set the ${name} env variable.`);
  }
  return useEnvs[name] || name;
}

const parseServerEnvs = () => ({
  //
});

const parsePublicEnvs = () => ({
  runningAt: isDev || (!isDev && isDevCI) ? getEnvValue('RUNNING_AT') : 'server',
  facebook: {
    appId: getEnvValue('FACEBOOK_APP_ID'),
  },
  globalSettings: {
    siteName: getEnvValue('GLOBAL_SETTINGS_SITE_NAME'),
    twitterUsername: getEnvValue('GLOBAL_SETTINGS_TWITTER_USERNAME'),
    domainUri: getEnvValue('GLOBAL_SETTINGS_DOMAIN_URI'),
    localApi: getEnvValue('GLOBAL_SETTINGS_DOMAIN_URI') + (isDev ? '/api/mocks' : '/api'),
  },
  covid19: {
    regionsAroundUs: getEnvValue('COVID19_REGIONS_AROUND'),
    govBRuri: getEnvValue('GOV_BR_URI'),
    govBRappId: getEnvValue('GOV_BR_APP_ID'),
  },
  fullTextSearch: {
    algolia: {
      appId: getEnvValue('ALGOLIA_APP_ID'),
      searchApiKey: getEnvValue('ALGOLIA_SEARCH_API_KEY'),
    },
  },
});

module.exports = withBundleAnalyzer({
  basePath: '',
  assetPrefix: !isDev ? '/vaidarcerto-app' : '',
  // Base directory to the app.
  distDir: '../.next',
  poweredByHeader: false,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const plugins = config.plugins.concat([
      new webpack.EnvironmentPlugin({
        'LIB_VERSION': JSON.stringify(pkg.version),
        ...useEnvs,
      }),
    ]);

    config.resolve.alias['react-dom$'] = 'react-dom/profiling';
    config.resolve.alias['scheduler/tracing'] = 'scheduler/tracing-profiling';

    const customAlias = { routes: {} };

    if (isDev) {
      customAlias.routes = {
        '~/services/api': path.resolve(__dirname, '../mocks/api/'),
        '~/mocks-data': path.resolve(__dirname, '../mocks/data/'),
      }
    }

    const customAliasRoutes = {
      '~': path.resolve(__dirname), // it points to ./src/
      ...customAlias.routes,
    }

    Object.keys(customAliasRoutes).map((k, i) => {
      config.resolve.alias[k] = customAliasRoutes[k];
    });

    // next includes node_modules in webpack externals. Some of those have dependencies
    // on the aliases defined above. If a module is an external those aliases won't be used.
    // We need tell webpack to not consider those packages as externals.
    if (isServer) {
      const [nextExternals, ...externals] = config.externals;

      if (externals.length > 0) {
        // currently not the case but other next plugins might introduce additional
        // rules for externals. We would need to handle those in the callback
        throw new Error('There are other externals in the webpack config.');
      }

      config.externals = [
        (context, request, callback) => {
          return nextExternals(context, request, callback);
        },
      ];
    }

    return Object.assign({}, config, {
      plugins,
      node: {
        fs: 'empty',
      },
    });
  },

  // env variables are available at Build Time
  env: {
    ...useEnvs,
    ...parsePublicEnvs(),
  },
});
