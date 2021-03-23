import { Box, BoxProps } from "@chakra-ui/layout";

import { Scrollbars } from "react-custom-scrollbars";

const Scrollbar = ({ children }: any) => {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle: BoxProps = {
      rounded: "md",
      bg: "blackAlpha.600",
    };
    return <Box style={style} {...thumbStyle} {...props} />;
  };
  return (
    <Box pos="fixed" boxSize="full">
      <Scrollbars
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
      >
        {children}
      </Scrollbars>
    </Box>
  );
};

export default Scrollbar;
