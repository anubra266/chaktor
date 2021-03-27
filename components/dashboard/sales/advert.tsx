import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { GiCutDiamond } from "react-icons/gi";
import { bgStyles } from "styles/advert-box";

const Advert = () => {
  return (
    <Stack
      {...bgStyles}
      direction="row"
      bgColor="brand.400"
      rounded="xl"
      p={5}
      h="150px"
      color="white"
      shadow="md"
      pos="relative"
      _after={{
        content: "' '",
        pos: "absolute",
        bg: "blackAlpha.700",
        bottom: "-2",
        zIndex: -1,
        h: "20px",
        insetX: 5,
        rounded: "xl",
      }}
    >
      <Stack>
        <Text fontSize="sm">Check our new book about sales!</Text>
        <Spacer />
        <Button
          rounded="full"
          bg="white"
          color="black"
          fontWeight="semibold"
          w="120px"
          fontSize="sm"
          leftIcon={<Icon as={AiOutlineCloudDownload} color="red" />}
        >
          Download
        </Button>
      </Stack>
      <Spacer />
      <Flex
        rounded="lg"
        color="gray.800"
        direction="column"
        w="120px"
        pt="5"
        bg="whiteAlpha.600"
        align="center"
        fontSize="xs"
        pos="relative"
        overflowY="clip"
      >
        <Icon as={GiCutDiamond} />
        <Flex direction="column" lineHeight="1" mt={1}>
          <Text>Sales</Text>
          <Text>Shine</Text>
        </Flex>
        <Flex
          pos="absolute"
          bg="yellow.300"
          h="40px"
          bottom="0"
          left="0"
          w="full"
          roundedTop="full"
        />
      </Flex>
    </Stack>
  );
};

export default Advert;
