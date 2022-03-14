import * as React from "react";
import {
  InputGroup,
  InputRightElement,
  Input,
  InputProps,
  Spinner,
} from "@chakra-ui/react";

interface SearchFormProps {
  "aria-labelledby"?: InputProps["aria-labelledby"];
  isBusy?: boolean;
  search?: (value: string) => void;
}

export function SearchForm(props: SearchFormProps) {
  const { isBusy, search, ...rest } = props || {};
  const [inputValue, setInputValue] = React.useState("");

  function changeValue(value: string) {
    setInputValue(value);
    if (search) search(value);
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    changeValue(e.target.value);
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keywordsParam = params.get("keywords");
    if (keywordsParam) changeValue(keywordsParam);
  }, []);

  return (
    <form role="search" onSubmit={(e) => e.preventDefault()}>
      <InputGroup>
        <Input
          {...rest}
          value={inputValue}
          onChange={handleOnChange}
          type="search"
          aria-labelledby="search-label"
          name="search"
          variant="filled"
          placeholder="Type any keyword"
          bgColor="teal.800"
          color="gray.700"
          focusBorderColor="brand.orange"
          _hover={{
            bgColor: "teal.900",
          }}
          size="sm"
          height={29}
          borderRadius={5}
        />
        {isBusy && (
          <InputRightElement height="full">
            <Spinner size="sm" />
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
}
