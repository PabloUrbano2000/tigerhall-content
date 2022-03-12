import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GQL_ENDPOINT,
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          contentCards: {
            keyArgs: ["filter", ["keywords"]],
            merge(
              existing,
              incoming,
              {
                args: {
                  filter: { offset = 0 },
                },
              }
            ) {
              if (!existing?.edges) return { ...incoming };
              const merged = existing.edges.concat(incoming.edges);
              return merged;
            },
          },
        },
      },
    },
  }),
  link: ApolloLink.from([httpLink]),
});
