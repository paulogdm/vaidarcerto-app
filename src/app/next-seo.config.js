// Next.js seo configuration

import getConfig from './config';

const {
  domainUri,
  siteName,
  twitterUsername,
} = getConfig.globalSettings;

export default {
  openGraph: {
    type: 'website', // it could be: article, website
    locale: 'en',
    url: domainUri, // canonical
    site_name: siteName.replace(" ", ''),
    title: siteName,
    description: null,
    image: null,
  },
  twitter: {
    handle: `@${twitterUsername}`, // @handle
    site: domainUri.replace(/(^\w+:|^)\/\//, ''), // @site
    cardType: 'summary',
  },
  facebook: {
    appId: getConfig.facebook.appId,
  }
};
