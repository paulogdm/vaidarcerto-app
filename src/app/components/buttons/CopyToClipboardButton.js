import React from 'react';

const CopyToClipboardButton = props => {
  const { children, url, setAlertOpened, ...rest } = props;

  const handleCopy = ({ event, url }) => {
    event.preventDefault();

    navigator.clipboard.writeText(url).then(() => {
      setAlertOpened(true);
    });
  }

  return (
    <div
      {...rest}
      onClick={event => handleCopy({ event, url })}
    >
      {children}
    </div>
  )
}

export default CopyToClipboardButton;
