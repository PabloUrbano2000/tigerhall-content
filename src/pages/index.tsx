import * as React from "react";
import debounce from "lodash.debounce";
import { useLazyQuery, gql } from "@apollo/client";
import { Heading, Stack, SimpleGrid } from "@chakra-ui/react";

import { SearchForm } from "../components/SearchForm";
import { ContentCard, ContentCardData } from "../components/ContentCard";
import { PODCAST_CONTENT_CARD } from "../components/ContentCard/fragments";

interface ContentCardsVars {
  limit: number;
  offset: number;
  keywords: string;
}

interface ContentCardsResponse {
  contentCards: {
    edges: ContentCardData[];
  };
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
  const [inputValue, setInputValue] = React.useState("");
  const [keywordsToSearch, setKeywordsToSearch] = React.useState(inputValue);

  const [loadSearchResults, { called, loading, data, error }] = useLazyQuery<
    ContentCardsResponse,
    ContentCardsVars
  >(GET_PODCAST_CONTENT_CARDS, {
    variables: {
      limit: 20,
      offset: 0,
      keywords: keywordsToSearch,
    },
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = React.useCallback(
    debounce((value) => setKeywordsToSearch(value), 300),
    []
  );

  // triggers the search query when the `keywordsToSearch` state changes
  React.useEffect(() => {
    loadSearchResults();

    return () => {
      // abort any request when unmounting
      const controller = new AbortController();
      controller.abort();
      debouncedSearch.cancel();
    };
  }, [keywordsToSearch, debouncedSearch, loadSearchResults]);

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
          value={inputValue}
          onChange={handleOnChange}
          isBusy={called && loading}
        />
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        px={{ base: 0, sm: 10 }}
        maxW="container.xl"
        spacing={{ base: "10px", md: "20px" }}
      >
        {data ? (
          data.contentCards.edges.map((contentCard, i) => {
            return (
              <ContentCard
                key={contentCard.name}
                name={contentCard.name}
                image={contentCard.image}
                categories={contentCard.categories}
                experts={contentCard.experts}
                // first 4 images load faster
                imageLoading={i < 4 ? "eager" : "lazy"}
              />
            );
          })
        ) : (
          <p>no hay</p>
        )}
      </SimpleGrid>
      ;
    </Stack>
  );
};

export default Index;
