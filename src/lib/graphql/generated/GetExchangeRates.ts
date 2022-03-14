/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetExchangeRates
// ====================================================

export interface GetExchangeRates_contentCards_edges_Ebook {
  __typename: "Ebook" | "Event" | "Stream" | "Expert" | "LearningPath";
}

export interface GetExchangeRates_contentCards_edges_Podcast_image {
  __typename: "Image";
  uri: string;
}

export interface GetExchangeRates_contentCards_edges_Podcast_categories {
  __typename: "Category";
  /**
   * Name of the category
   */
  name: string;
}

export interface GetExchangeRates_contentCards_edges_Podcast_experts {
  __typename: "Expert";
  /**
   * Their first name
   */
  firstName: string;
  /**
   * Their last name
   */
  lastName: string;
  /**
   * The title of the expert
   */
  title: string;
  /**
   * The name of the company that the expert worked for
   */
  company: string | null;
}

export interface GetExchangeRates_contentCards_edges_Podcast {
  __typename: "Podcast";
  name: string;
  image: GetExchangeRates_contentCards_edges_Podcast_image | null;
  categories: GetExchangeRates_contentCards_edges_Podcast_categories[];
  experts: GetExchangeRates_contentCards_edges_Podcast_experts[];
}

export type GetExchangeRates_contentCards_edges = GetExchangeRates_contentCards_edges_Ebook | GetExchangeRates_contentCards_edges_Podcast;

export interface GetExchangeRates_contentCards {
  __typename: "ContentConnection";
  edges: GetExchangeRates_contentCards_edges[];
}

export interface GetExchangeRates {
  contentCards: GetExchangeRates_contentCards;
}

export interface GetExchangeRatesVariables {
  limit: number;
  offset: number;
  keywords: string;
}
