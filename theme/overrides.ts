import { layerStyles } from "./tlStyles/layerStyles";
import { textStyles } from "./tlStyles/textStyles";
import { styles } from "./styles";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { ThemeConfig, ThemeOverride } from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

export const overrides: ThemeOverride = {
  config,
  fonts,
  colors,
  styles,
  textStyles,
  layerStyles,
};
