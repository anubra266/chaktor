import { BoxProps } from "@chakra-ui/react";

type textStyles = { [key: string]: BoxProps | any };
export const textStyles: textStyles = {
  stroke: {
    color: "transparent",
    WebkitTextStrokeColor: "white",
    WebkitTextStrokeWidth: "1px",
  },
};
