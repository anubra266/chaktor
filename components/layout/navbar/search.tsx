import Icon from "@chakra-ui/icon";
import {
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
} from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import React from "react";

import { FiSearch } from "react-icons/fi";

const Search = (props: InputGroupProps) => {
  return (
    <Flex {...props}>
      <InputGroup display="flex" alignItems="center">
        <InputLeftElement
          h="full"
          pointerEvents="none"
          children={<Icon as={FiSearch} color="blue.600" fontSize="lg" />}
        />
        <Input
          type="text"
          placeholder="Search for people, document, goods..."
          fontSize="sm"
          _placeholder={{
            textStyle: "light",
          }}
          variant="unstyled"
        />
      </InputGroup>
    </Flex>
  );
};

export default Search;
