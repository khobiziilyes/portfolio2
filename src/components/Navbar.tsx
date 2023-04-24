import { useRouter } from "next/router";
import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  LinkProps,
  BoxProps,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import AppLink from "./AppLink";

import ThemeToggleButton from "./theme-toggle-button";
import Logo from "./Logo";

const LinkItem = ({
  href,
  currentPath,
  target = "_self",
  children,
  ...linkProps
}: React.PropsWithChildren<
  {
    href: string;
    currentPath: string;
    target?: string;
  } & LinkProps
>) => {
  const isActive = currentPath === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  return (
    <AppLink
      href={href}
      target={target}
      bg={isActive ? "grassTeal" : undefined}
      color={isActive ? "#202023" : inactiveColor}
      {...linkProps}
    >
      {children}
    </AppLink>
  );
};

const Navbar = (props: BoxProps) => {
  const router = useRouter();
  const currentPath = router.asPath;

  const menuItems = (wrap = false) =>
    [
      {
        label: "Projects",
        href: "/projects",
      },
    ].map((item) => (
      <LinkItem
        href={item.href}
        currentPath={currentPath}
        key={`menu-item-${item.href}`}
      >
        {wrap ? <MenuItem>{item.label}</MenuItem> : <>{item.label}</>}
      </LinkItem>
    ));

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.md">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {menuItems(false)}
        </Stack>

        <Box flex={1} textAlign="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>{menuItems(true)}</MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
