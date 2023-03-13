// Enums
import { EnvName } from '@enums/environment.enum';

// Packages
import packageInfo from '../../package.json';

const scheme = 'https://';
const host = 'giftpickr.com';
const port = '';
const path = '/api/';

const baseUrl = scheme + host + port + path;

export const environment = {
  production: true,
  version: packageInfo.version,
  appName: 'GiftPickr',
  envName: EnvName.PROD,
  defaultLanguage: 'en',
  apiBaseUrl: baseUrl + path,
  baseUrl: baseUrl,
};
