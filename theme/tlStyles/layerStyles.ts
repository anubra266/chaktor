import { BoxProps } from "@chakra-ui/react";
import { mode } from "./tl-mode";

type layerStyles = { [key: string]: BoxProps };
export const layerStyles: layerStyles = {
  card: {
    ...mode("bg", "white", "gray.800"),
    shadow: "base",
  },
  net: {
    backgroundImage: "url('/images/bg-over.png')",
    backgroundRepeat: "repeat",
    bgColor: "brand.900",
  },
  "job-badge": {
    fontWeight: "semibold",
    fontSize: "xx-small",
    textAlign: "center",
    h: 5,
  },
};
