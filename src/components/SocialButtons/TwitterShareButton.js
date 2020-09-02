import React from 'react';

const TwitterShareButton = props => {
  const {
    children,
    title,
    hashtags,
    site,
    handle,
    url,
    ...rest
  } = props;
  const encodedText = encodeURIComponent(title);
  const urlString = 'https://twitter.com/intent/tweet?';
  const urlParams = [
    `text=${encodedText}`,
    `via=${handle}`,
    `url=${url}`,
    `hashtags=${hashtags}`,
  ];

  const uri = urlString + urlParams.join('&');

  return (
    <a
      {...rest}
      href={uri}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default TwitterShareButton;
