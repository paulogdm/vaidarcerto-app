import React from 'react';

import { getStorageMedia } from '~/modules/firebase/services';

const ImageAsync = ({ children, folder, image }) => {
  const initialState = '...';
  const [imageUrl, setImageUrl] = React.useState(initialState);

  React.useEffect(() => {
    const task = getStorageMedia(folder, image)
      .then(result => setImageUrl(result))
      .catch(err => console.error('Not possible to fetch image.', err));

    return () => task;
  }, []);

  return children({
    imageUrl,
  });
}

export default ImageAsync;
