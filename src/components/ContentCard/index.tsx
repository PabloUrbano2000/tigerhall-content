import { Box, Text, Image } from "@chakra-ui/react";

interface Image {
  uri: string;
}

interface Category {
  name: string;
}

interface Expert {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
}

export interface ContentCardProps {
  name?: string;
  image?: Image;
  categories?: Category[];
  experts?: Expert[];
}

const ContentCard: React.FC<ContentCardProps> = (props) => {
  const { name, image, categories, experts } = props || {};

  return (
    <Box as="article" maxW={276} height={290} bg="orange.600">
      <Box flexShrink={0}>
        <Image
          src="https://bit.ly/2jYM25F"
          height={130}
          width="full"
          objectFit="cover"
          alt="Woman paying for a purchase"
          decoding="async"
          bgColor="gray.100"
        />
      </Box>
      <Box mt={4}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          Test1
        </Text>
        <Text
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
        >
          Test2
        </Text>
        <Text mt={2} color="gray.500">
          bla bla bla bla bla bla
        </Text>
      </Box>
    </Box>
  );
};

export default ContentCard;
