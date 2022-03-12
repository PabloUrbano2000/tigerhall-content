import { gql } from "@apollo/client";

const CONTENT_IMAGE = gql`
  fragment Image on Image {
    uri
  }
`;
const CONTENT_CATEGORY = gql`
  fragment Category on Category {
    name
  }
`;

const CONTENT_EXPERT = gql`
  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;

export const PODCAST_CONTENT_CARD = gql`
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
  ${CONTENT_IMAGE}
  ${CONTENT_CATEGORY}
  ${CONTENT_EXPERT}
`;
