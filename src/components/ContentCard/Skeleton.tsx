import * as React from "react";
import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

export const ContentCardSkeleton = React.memo(function ContentCardSkeleton() {
  return (
    <Box
      as="article"
      width={276}
      height={290}
      bg="white"
      borderRadius={5}
      overflow="hidden"
    >
      <Box flexShrink={0}>
        <Skeleton height={130} width="full" />
      </Box>
      <Box mt="10px" mx="12px">
        <SkeletonText mt="5" noOfLines={4} spacing="4" />
      </Box>
    </Box>
  );
});
