import React from 'react';

const TelegramShareButton = props => {
  const {
    children,
    title,
    excerpt,
    siteName,
    url,
    ...rest
  } = props;
  const encodedText = encodeURIComponent(`**${title}**`)
    + ", " + encodeURIComponent(excerpt)
    + " - " + encodeURIComponent(`__via__ **${siteName}**`);

  return (
    <a
      {...rest}
      href={`tg://msg_url?url=${url}&text=${encodedText}`}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default TelegramShareButton;
