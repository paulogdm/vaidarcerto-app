import Router from 'next/router';

export const handleLinkClick = (event, route, slug, shallow = true) => {
  event.preventDefault();

  return Router.push(route, slug, { shallow });
}
