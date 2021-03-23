import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { LayoutTree } from "@moxy/next-layout";
import Theme from "theme";
import SiteLayout from "components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <DefaultSeo
        titleTemplate="%s | Chaktor"
        defaultTitle="Chaktor"
        description="Chakra UI Template"
        canonical="https://anubra266.tk/"
        openGraph={{
          url: "https://anubra266.tk/",
          site_name: "Chaktor",
          title: "Chaktor",
          description: "Chakra UI Template",
          type: "website",
          locale: "en_IE",
          images: [
            {
              url: "/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/logo.png",
          },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "76x76",
          },
        ]}
        twitter={{
          handle: "@anubra266",
          site: "@anubra266",
          cardType: "summary_large_image",
        }}
      />
      <LayoutTree
        Component={Component}
        pageProps={pageProps}
        defaultLayout={<SiteLayout />}
      />
    </Theme>
  );
}

export default MyApp;
