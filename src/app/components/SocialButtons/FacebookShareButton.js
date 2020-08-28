import React from 'react';

const FacebookShareButton = ({ children, appId, url, ...rest }) => {
  const encodedUrl = encodeURIComponent(url);

  return (
    <a
      {...rest}
      href={`https://www.facebook.com/dialog/share?app_id=${appId}&display=popup&href=${encodedUrl}`}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default FacebookShareButton;
