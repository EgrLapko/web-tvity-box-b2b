import React, { AnchorHTMLAttributes } from "react";
import NextLink, { LinkProps } from "next/link";

const LinkComponent = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  const { href, as, replace, scroll, shallow, prefetch, ...other } = props;
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
    >
      <a ref={ref} {...other} />
    </NextLink>
  );
});

LinkComponent.displayName = "LinkComponent";

export default LinkComponent;
