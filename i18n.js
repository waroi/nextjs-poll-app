const NextI18Next = require('next-i18next').default;
const config = require('next/config').default();
const get = require('lodash/get');

const localeSubpaths = get(config, 'publicRuntimeConfig.localeSubpaths', 'none');

const EN = 'en';
const TR = 'tr';

const localeSubpathMapping = {
  none: {},
  en: EN,
  tr: TR,
  all: {
    en: EN,
    tr: TR,
  },
};

module.exports = new NextI18Next({
  defaultNS: 'common',
  defaultLanguage: 'en',
  otherLanguages: [EN, TR],
  localeSubpaths: localeSubpathMapping[localeSubpaths],
});
