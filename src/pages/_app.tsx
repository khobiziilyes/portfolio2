import type { AppProps } from "next/app";
import { ChakraProvider, localStorageManager } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import theme from "@/lib/theme";
import Main from "@/components/Main";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <Main>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
}
