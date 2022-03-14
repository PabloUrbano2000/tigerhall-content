/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Podcast
// ====================================================

export interface Podcast_image {
  __typename: "Image";
  uri: string;
}

export interface Podcast_categories {
  __typename: "Category";
  /**
   * Name of the category
   */
  name: string;
}

export interface Podcast_experts {
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

export interface Podcast {
  __typename: "Podcast";
  name: string;
  image: Podcast_image | null;
  categories: Podcast_categories[];
  experts: Podcast_experts[];
}
