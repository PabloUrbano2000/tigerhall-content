import * as React from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { Heading, Stack } from "@chakra-ui/react";

import { SearchForm } from "../components/SearchForm";
import { ContentCardProps } from "../components/ContentCard";
import { PODCAST_CONTENT_CARD } from "../components/ContentCard/fragments";

interface ContentCardsVars {
  limit: number;
  offset: number;
  keywords: string;
}

const GET_PODCAST_CONTENT_CARDS = gql`
  query GetExchangeRates($limit: Int!, $offset: Int!, $keywords: String!) {
    contentCards(
      filter: {
        limit: $limit
        offset: $offset
        keywords: $keywords
        types: [PODCAST]
      }
    ) {
      edges {
        ...Podcast
      }
    }
  }
  ${PODCAST_CONTENT_CARD}
`;

const Index = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const [loadSearchResults, { called, loading, data }] = useLazyQuery<
    ContentCardProps,
    ContentCardsVars
  >(GET_PODCAST_CONTENT_CARDS, {
    variables: {
      limit: 20,
      offset: 0,
      keywords: searchValue,
    },
  });

  React.useEffect(() => {
    loadSearchResults();
    console.log("data", data);
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  if (loading) {
    return <div>loading</div>;
  }

  if (called && loading) return <p>Loading ...</p>;

  return (
    <Stack
      as="main"
      alignItems="center"
      justifyContent="flex-start"
      height="100vh"
      padding={5}
      spacing={{ base: 4, md: 5 }}
    >
      <Stack as="header" spacing={1} w="full" maxW={{ base: 276, md: 480 }}>
        {/* I had to decide to use "Search" as the h1 or the input label */}
        <Heading as="h1" id="search-label" size="xs" lineHeight="5">
          Search
        </Heading>
        <SearchForm
          aria-labelledby="search-label"
          variant="filled"
          bgColor="teal.800"
          placeholder="Type any keyword"
          color="gray.700"
          size="sm"
          height={29}
          borderRadius={5}
          value={searchValue}
          onChange={handleOnChange}
        />
      </Stack>
    </Stack>
  );
};

export default Index;
