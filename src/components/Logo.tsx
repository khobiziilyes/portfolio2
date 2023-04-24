import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { nextFont } from "@/lib/theme";
import AppLink from "./AppLink";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 20px;
  line-height: 10px;
  padding: 23px;
`;

const Logo = () => {
  return (
    <AppLink href="/" scroll={false}>
      <LogoBox>
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily={`${nextFont.style.fontFamily}, sans-serif`}
          fontWeight="bold"
          ml={3}
        >
          Ilyes K.
        </Text>
      </LogoBox>
    </AppLink>
  );
};

export default Logo;
