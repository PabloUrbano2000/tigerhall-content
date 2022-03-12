import { Text } from "@chakra-ui/react";

export interface Category {
  name: string;
}

export interface Expert {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
}

interface ContentCardInfoProps {
  title: string;
  category: Category["name"];
  expertName: string;
  expertTitle: Expert["title"];
  expertCompany: Expert["company"];
}

export const ContentCardInfo: React.FC<ContentCardInfoProps> = ({
  title,
  category,
  expertName,
  expertTitle,
  expertCompany,
}) => {
  return (
    <>
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
        {title}
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
    </>
  );
};
