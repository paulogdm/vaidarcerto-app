import React from 'react';

const WhatsAppShareButton = props => {
  const {
    children,
    title,
    excerpt,
    siteName,
    url,
    ...rest
  } = props;
  const encodedText = encodeURIComponent(`*${title}*`)
    + ", " + encodeURIComponent(excerpt)
    + " - " + encodeURIComponent(`via *${siteName}*`)
    + " " + encodeURIComponent(`${url}`);

  return (
    <a
      {...rest}
      href={`https://api.whatsapp.com/send?text=${encodedText}`}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default WhatsAppShareButton;
