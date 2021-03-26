import { GridItem, SimpleGrid } from "@chakra-ui/layout";
import Header from "components/dashboard/header";
import Sales from "components/dashboard/sales";
import { NextSeo } from "next-seo";

export default function Dashboard() {
  return (
    <>
      <NextSeo title="Dashboard" description="App Dashboard" />
      <SimpleGrid columns={12} spacing={8}>
        <GridItem
          colSpan={{ base: 12, lg: 6, xl: 8 }}
          as={SimpleGrid}
          columns={12}
        >
          <GridItem colSpan={12}>
            <Header />
          </GridItem>
        </GridItem>
        <Sales />
      </SimpleGrid>
    </>
  );
}
