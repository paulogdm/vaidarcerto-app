import { freeze } from '~/modules/utils/request';

import { globalSettings } from '~/mocks-data/global-settings';

const getGlobalSettings = async (req, res) => {
  await freeze(2000);
  const props = {};
  const dataLength = Object.keys(globalSettings).length;

  if (Boolean(dataLength) && dataLength > 0) {
    await Object.values(globalSettings).map(item => {
      if (item.type === 'banner-header') {
        props.bannerHeader = item.bannerHeader;
      } else if (item.type === 'logo') {
        props.logoObj = item.logoObj;
      } else if (item.type === 'menu-header') {
        props.menuHeader = item.menuHeader;
      } else if (item.type === 'menu-footer') {
        props.menuFooter = {
          menuRoutes: item.menuFooter,
          socials: item.socials,
        }
      }

      return item;
    });
  }

  return props;
}

export default getGlobalSettings;
