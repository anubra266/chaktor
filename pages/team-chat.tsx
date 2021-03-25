import Icon from "@chakra-ui/icon";
import { Box, Stack, Text } from "@chakra-ui/layout";
import PageHeader from "components/page-header";
import { NextSeo } from "next-seo";
import { IoIosArrowDown } from "react-icons/io";
import { RiDashboardLine } from "react-icons/ri";

export default function TeamChat() {
  return (
    <Box>
      <NextSeo title="Team Chat" description="App Dashboard" />
      <PageHeader>
        <PageHeader.Title>Team Chat</PageHeader.Title>
        <PageHeader.Description>Chakra UI Community</PageHeader.Description>
        <PageHeader.Actions>
          <Stack direction="row">
            <Stack direction="row" alignItems="center">
              <Text>This week</Text>
              <Icon as={IoIosArrowDown} />
            </Stack>
            <Stack direction="row" alignItems="center">
              <Text>Change view</Text>
              <Icon as={RiDashboardLine} fontSize="2xl" />
            </Stack>
          </Stack>
        </PageHeader.Actions>
      </PageHeader>
    </Box>
  );
}
