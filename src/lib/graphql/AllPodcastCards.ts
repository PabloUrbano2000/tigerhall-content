import { gql } from "@apollo/client";

const PODCAST_CARD_IMAGE = gql`
  fragment Image on Image {
    uri
  }
`;
const PODCAST_CARD_CATEGORY = gql`
  fragment Category on Category {
    name
  }
`;

const PODCAST_CARD_EXPERT = gql`
  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;

const PODCAST_CARD = gql`
  fragment Podcast on Podcast {
    name
    image {
      ...Image
    }
    categories {
      ...Category
    }
    experts {
      ...Expert
    }
  }
  ${PODCAST_CARD_IMAGE}
  ${PODCAST_CARD_CATEGORY}
  ${PODCAST_CARD_EXPERT}
`;

export const ALL_PODCAST_CARDS = gql`
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
  ${PODCAST_CARD}
`;
