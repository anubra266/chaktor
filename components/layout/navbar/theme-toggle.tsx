import React from "react";
import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggle = () => {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const text = useColorModeValue("dark", "light");
  const { toggleColorMode: toggleMode } = useColorMode();
  return (
    <IconButton
      size="sm"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      title={`Switch to ${text} mode`}
      variant="ghost"
      onClick={toggleMode}
      icon={<SwitchIcon />}
    />
  );
};
