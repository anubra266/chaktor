import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: any) => ({
    body: {
      fontFamily: "body",
      color: mode("black", "white")(props),
      bg: mode("gray.50", "bg.900")(props),
    },
    html: {
      minH: "100%",
    },
  }),
};
