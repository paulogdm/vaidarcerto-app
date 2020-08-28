import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { Skeleton } from '@material-ui/lab';

const AvatarIndicator = ({ dimensions, square }) => (
  <Skeleton
    variant={!square ? 'circle' : 'square'}
    width={dimensions.width}
    height={dimensions.height}
  />
);

AvatarIndicator.defaultProps = {
  dimensions: {
    width: 40,
    height: 40,
  },
  square: false,
};

AvatarIndicator.propTypes = {
  dimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  square: PropTypes.bool,
}

const WithAvatar = ({ title, imageSrc, dimensions, square, ...rest }) => (
  <Avatar
    alt={title}
    src={imageSrc}
    variant={!square ? 'circle' : 'square'}
    style={{
      width: dimensions.width,
      height: dimensions.height
    }}
    imgProps={rest.imgProps}
  />
);

WithAvatar.defaultProps = {
  src: '',
  dimensions: {
    width: 40,
    height: 40,
  },
  square: false,
}

WithAvatar.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  imgProps: PropTypes.object,
  dimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  square: PropTypes.bool,
}

export {
  AvatarIndicator,
  WithAvatar,
}
