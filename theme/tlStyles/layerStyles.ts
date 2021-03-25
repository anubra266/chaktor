import { BoxProps } from "@chakra-ui/react";
import { mode } from "./tl-mode";

type layerStyles = Record<string, BoxProps | any>;
export const layerStyles: layerStyles = {
  card: {
    ...mode("bg", "white", "whiteAlpha.100"),
  },
  neutral: {
    ...mode("bg", "gray.50", "bg.800"),
  },
};
