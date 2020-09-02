import dynamic from 'next/dynamic';
import {
  IconButton,
  CardActions,
  Divider,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const DynamicPhoneCallButton = dynamic(() => import('~/components/buttons/PhoneCallButton'));
const DynamicWhatsAppChatButton = dynamic(() => import('~/components/SocialButtons/WhatsAppChatButton'));
const DynamicTelegramChatButton = dynamic(() => import('~/components/SocialButtons/TelegramChatButton'));
const DynamicPlaceMapButton = dynamic(() => import('~/components/buttons/PlaceMapButton'));
const DynamicSocialShareButton = dynamic(() => import('./SocialShareButton'));
const DynamicSocialButtons = dynamic(() => import('./SocialButtons'));

const CustomCardActions = (props) => {
  const {
    routerProps,
    itemProps,
    commercialText,
    globalSettings,
    handleAlertOpened,
    ...rest
  } = props;
  const currentUri = globalSettings.domainUri + routerProps.asPath;

  return (
    <CardActions
      disableSpacing
      style={{
        justifyContent: 'space-evenly',
      }}
    >
      {(typeof itemProps.phone !== 'undefined') && (
        <DynamicPhoneCallButton
          phone={itemProps.phone}
        />
      )}

      {(typeof itemProps.whatsApp !== 'undefined') && (
        <DynamicWhatsAppChatButton
          number={itemProps.whatsApp}
          commercialText={commercialText}
          siteName={globalSettings.siteName}
          url={currentUri}
        />
      )}

      {(typeof itemProps.telegram !== 'undefined') && (
        <DynamicTelegramChatButton
          username={itemProps.telegram}
          siteName={globalSettings.siteName}
          url={currentUri}
        />
      )}

      {(typeof itemProps.placeLink !== 'undefined') && (
        <DynamicPlaceMapButton
          pLink={itemProps.placeLink}
        />
      )}

      <Divider orientation="vertical" variant="middle" flexItem />

      <IconButton aria-label="favourites">
        <FavoriteIcon />
      </IconButton>

      <DynamicSocialShareButton>
        <DynamicSocialButtons
          {...rest}
          {...itemProps}
          {...globalSettings}
          router={routerProps}
          onAlertOpened={handleAlertOpened}
        />
      </DynamicSocialShareButton>
    </CardActions>
  );
}

export default CustomCardActions;
