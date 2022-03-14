import * as React from "react";
import { Box, Image, ImageProps } from "@chakra-ui/react";

import { resize, fallbackImage } from "../../lib/resizer";
import { ContentCardInfo, Expert, Category } from "./Info";

interface Image {
  uri: string;
}

export interface ContentCardData {
  name: string;
  image: Image;
  categories: Category[];
  experts: Expert[];
}

interface ContentCardCustomProps {
  imageLoading?: ImageProps["loading"];
}

type ContentCardProps = ContentCardData & ContentCardCustomProps;

function contentCardsPropsAreEqual(
  prev: ContentCardProps,
  next: ContentCardProps
) {
  return prev.name === next.name && prev.image?.uri === next.image?.uri;
}

export const ContentCard = React.memo(function ContentCard(
  props: ContentCardProps
) {
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
      data-card
    >
      <Box flexShrink={0}>
        <Image
          src={resizedImage}
          height={130}
          width="full"
          objectFit="cover"
          alt={name}
          decoding="async"
          bgColor="gray.100"
          loading={imageLoading}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
      </Box>
      <Box mt="10px" mx="12px">
        <ContentCardInfo
          title={name}
          category={category}
          expertName={expertName}
          expertTitle={expertTitle}
          expertCompany={expertCompany}
        />
      </Box>
    </Box>
  );
},
contentCardsPropsAreEqual);
