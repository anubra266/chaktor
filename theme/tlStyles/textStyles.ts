import { BoxProps } from "@chakra-ui/react";
import { mode } from "./tl-mode";

type textStyles = { [key: string]: BoxProps | any };
export const textStyles: textStyles = {
  stroke: {
    color: "transparent",
    WebkitTextStrokeColor: "white",
    WebkitTextStrokeWidth: "1px",
  },
  default: {
    ...mode("color", "black", "white"),
  },
  light: {
    ...mode("color", "gray.500", "gray.300"),
  },
};
