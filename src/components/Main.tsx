import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

import { nextFont } from "@/lib/theme";
import Footer from "./Footer";

export default function Main({ children }: React.PropsWithChildren) {
  return (
    <Box as="main" pb={8} className={nextFont.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ilyes Khobizi's portfolio" />
        <meta name="author" content="Ilyes Khobizi" />
        <title>{`Ilyes Khobizi's portfolio`}</title>

        {/* TODO: Change favicons. */}
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Container maxW="container.md" pt={20}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
}
