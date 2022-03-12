import { Box, Text, Image, ImageProps } from "@chakra-ui/react";
import { resize, fallbackImage } from "../../utils/resizer";

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
export interface ContentCardData {
  name?: string;
  image?: Image;
  categories?: Category[];
  experts?: Expert[];
}

interface ContentCardCustomProps {
  imageLoading?: ImageProps["loading"];
}

export const ContentCard: React.FC<ContentCardData & ContentCardCustomProps> = (
  props
) => {
  const {
    name,
    image,
    categories,
    experts,
    imageLoading = "lazy",
  } = props || {};

  const { uri: imageUrl } = image || {};
  // image size x2 for improved performance in screens with high pixel density
  const resizedImage = resize({
    url: imageUrl,
    width: 276 * 2,
    height: 130 * 2,
    smartCrop: true,
    format: "jpeg",
  });

  const { name: category } = categories?.[0] || {};

  const {
    firstName: expertFirstName = "",
    lastName: expertLastName = "",
    title: expertTitle = "",
    company: expertCompany = "",
  } = experts?.[0] || {};
  const expertName = `${expertFirstName} ${expertLastName}`;

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
        <Image
          src={resizedImage}
          fallbackSrc={fallbackImage}
          height={130}
          width="full"
          objectFit="cover"
          alt={name}
          decoding="async"
          bgColor="gray.100"
          loading={imageLoading}
        />
      </Box>
      <Box mt="10px" mx="12px">
        <Text
          as="h3"
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="12px"
          lineHeight="15px"
          color="brand.orange"
          noOfLines={2}
        >
          {category}
        </Text>
        <Text
          as="h2"
          mt={1}
          display="block"
          fontWeight="bold"
          fontSize="18px"
          lineHeight="22px"
          color="black"
          noOfLines={2}
        >
          {name}
        </Text>
        <Text
          as="p"
          mt={2}
          fontWeight="semibold"
          fontSize="14px"
          lineHeight="17px"
          color="grey.1000"
          isTruncated
        >
          {expertName}
        </Text>
        <Text
          as="p"
          fontWeight="semibold"
          fontSize="14px"
          lineHeight="17px"
          color="grey.1000"
          isTruncated
        >
          {expertTitle}
        </Text>
        <Text
          as="p"
          fontWeight="semibold"
          fontSize="14px"
          lineHeight="17px"
          color="brand.orange"
          isTruncated
        >
          {expertCompany}
        </Text>
      </Box>
    </Box>
  );
};
