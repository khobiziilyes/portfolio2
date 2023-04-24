import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Link, type LinkProps as ChakraLinkProps } from "@chakra-ui/react";

export default function AppLink({
  children,
  ...linkProps
}: React.PropsWithChildren<Omit<NextLinkProps & ChakraLinkProps, "as">>) {
  return (
    <Link as={NextLink} {...linkProps}>
      {children}
    </Link>
  );
}
