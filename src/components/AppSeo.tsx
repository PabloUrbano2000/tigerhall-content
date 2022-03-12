import { DefaultSeo, SiteLinksSearchBoxJsonLd } from "next-seo";

import { brandColors } from "../theme/foundations/colors";

function AppSeo() {
  const meta = {
    url: "https://tigerhall.com/",
    name: "Tigerhall",
    title: "Tigerhall | Search",
    description:
      "Level up your Enterprise or Team via actionable insights & bite-sized content from 800+ Global Experts",
  };

  return (
    <>
      <DefaultSeo
        defaultTitle={meta.title}
        description={meta.description}
        canonical={meta.url}
        openGraph={{
          type: "website",
          locale: "en",
          url: meta.url,
          title: meta.title,
          site_name: meta.name,
          description: meta.description,
          images: [
            {
              url: "https://cdn.techinasia.com/data/images/bWlOrqIAUtDzVd2tk7a3z86fBkDNQ1JX6OPuooJK.jpeg",
              alt: `${meta.name} logo`,
            },
          ],
        }}
        twitter={{
          cardType: "summary",
          site: "@tigerhallasia",
        }}
        additionalLinkTags={[
          {
            rel: "shortcut icon",
            href: "/favicon.ico",
          },
        ]}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Enterprise, Team, insights, content, Global Experts, Social Learning Platform",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge",
          },
          {
            name: "theme-color",
            content: brandColors.orange,
          },
          {
            name: "msapplication-TileColor",
            content: brandColors.orange,
          },
          {
            name: "apple-mobile-web-app-title",
            content: meta.name,
          },
          {
            name: "application-name",
            content: meta.name,
          },
          {
            name: "lang",
            content: "en",
          },
        ]}
      />
      <SiteLinksSearchBoxJsonLd
        url={meta.url}
        potentialActions={[
          {
            target: meta.url + "?keywords",
            queryInput: "search_term_string",
          },
        ]}
      />
    </>
  );
}

export default AppSeo;
