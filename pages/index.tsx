import { Grid, GridItem, SimpleGrid, Stack } from "@chakra-ui/layout";
import Header from "components/dashboard/header";
import Sales from "components/dashboard/sales";
import { NextSeo } from "next-seo";

export default function Dashboard() {
  return (
    <>
      <NextSeo title="Dashboard" description="App Dashboard" />
      <Grid
        w="full"
        gap={8}
        templateColumns={["repeat(1, 1fr)",  "auto 300px"]}
      >
        <SimpleGrid columns={12} w="full">
          <GridItem colSpan={12}>
            <Header />
          </GridItem>
        </SimpleGrid>
        <Sales />
      </Grid>
    </>
  );
}
