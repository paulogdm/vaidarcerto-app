import { useRouter } from 'next/router';

const ActiveLink = props => {
  const { children, href, ...rest } = props;
  const router = useRouter();

  const handleClick = event => {
    event.preventDefault();

    router.push(href);
  }

  return (
    <a
      {...rest}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

export default ActiveLink;
