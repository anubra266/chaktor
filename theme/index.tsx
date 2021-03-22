import * as React from "react";
import {
  extendTheme,
  ChakraProvider,
  ChakraProviderProps,
} from "@chakra-ui/react";
import { overrides } from "./overrides";
import Fonts from "./foundations/fonts";

const theme = extendTheme(overrides);

export default function Theme({ children }: ChakraProviderProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
}
