import { database, parseQuerySnapshot } from '~/modules/firebase/services';

const globalSettings = async () => {
  const globalRef = database.collection('globalSettings');
  const querySnapshot = await globalRef.get();

  const props = {};
  const newObject = await parseQuerySnapshot(querySnapshot);

  if (Boolean(newObject.length) && newObject.length > 0) {
    await newObject.map(item => {
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

export default globalSettings;
