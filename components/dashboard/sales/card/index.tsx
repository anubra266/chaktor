import { Box, BoxProps } from "@chakra-ui/layout";
import Chip from "./chip";

const Card = (props: BoxProps & { data: Record<string, any> }) => {
  const contentStyles: BoxProps = {
    textShadow:
      "-1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.5)",
    color: "#b0b0b0",
    fontFamily: "'Droid Serif', serif",
    zIndex: 4,
    sx: {
      span: {
        left: 0,
        top: 0,
        display: "block",
        pos: "absolute",
        w: "full",
        overflow: "hidden",
        color: "#7a1a86",
        pl: "2px",
        whiteSpace: "nowrap",
      },
      "span+span": {
        color: "#a545b1",
        h: "7px",
        overflow: "hidden",
      },
      strong: {
        fontWeight: "normal",
      },
      em: {
        textTransform: "uppercase",
        position: "absolute",
        fontStyle: "normal",
        fontSize: "9px !important",
        textShadow: "none",
        fontFamily: "Open sans, sans-serif",
        color: "rgba(255,255,255,.6)",
      },
    },
  };

  const numberStyles: BoxProps = {
    pos: "absolute",
    w: "240px",
    top: "100px",
    left: "30px",
    fontSize: "21px",
    h: "21px",
    fontFamily: "courier",
    textAlign: "justify",
  };

  const holderStyles: BoxProps = {
    textTransform: "uppercase",
    position: "absolute",
    w: "240px",
    top: "160px",
    left: "20px",
    fontSize: "14px",
    fontWeight: 100,
    h: "30px",
    sx: {
      em: { top: "-16px" },
      span: {
        letterSpacing: "1px",
      },
      "span + span": {
        h: "4px",
      },
    },
  };

  const validUntilStyles: BoxProps = {
    fontFamily: "courier",
    pos: "absolute",
    top: "128px",
    left: "150px",
    fontSize: "16px",
    h: "16px",
    w: "120px",
    whiteSpace: "nowrap",
    sx: {
      em: {
        top: "3px",
        left: "-36px",
      },
    },
  };
  const expiryDates: BoxProps = {
    letterSpacing: "1px",
    display: "inline-block",
    pos: "relative",
    float: "left",
    m: "0 1px",
    sx: {
      span: {
        position: "relative",
      },
      "span + span": {
        pos: "absolute",
        h: "5px",
      },
    },
  };
  const { data, ...rest } = props;
  const mask = (str: any) =>
    str
      .replace(/\d(?=\d{4})/g, "*")
      .match(/.{1,4}/g)
      .join(" ");
  return (
    <Box
      w="full"
      h="188px"
      rounded="2xl"
      sx={{ perspective: "1000px" }}
      {...rest}
      bg="brand.700"
      flex="none"
    >
      <Box pos="relative" w="full" h="188px">
        <Box zIndex={2}>
          <Box
            id="shine"
            pos="absolute"
            inset={0}
            rounded="2xl"
            bg="linear-gradient(135deg, rgba(255,255,255,.25) 0%,rgba(255,255,255,0) 60%)"
            zIndex={5}
          ></Box>
          <Box
            {...contentStyles}
            boxSize="full"
            pos="absolute"
            left={0}
            top={0}
          >
            <Chip />
            <Box pos="absolute" right="20px" top="20px" w="50px" h="30px">
              {data.type}
            </Box>
            <Box {...numberStyles}>
              <span>{mask(data.number)}</span>
            </Box>
            <Box {...holderStyles}>
              <em>Card holder</em>
              <span>{data.name}</span>
            </Box>
            <Box {...validUntilStyles}>
              <em>Expire</em>
              <Box {...expiryDates}>
                <span>{data.expiry.month}</span>
              </Box>
              <Box {...expiryDates}>
                <span>/</span>
              </Box>
              <Box {...expiryDates}>
                <span>{data.expiry.year}</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Card;
