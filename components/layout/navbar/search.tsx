import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import React from "react";

import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
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
  );
};

export default Search;
