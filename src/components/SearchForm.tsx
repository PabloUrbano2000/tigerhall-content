import * as React from "react";
import {
  InputGroup,
  InputRightElement,
  Input,
  InputProps,
  Spinner,
} from "@chakra-ui/react";

interface SearchFormProps {
  isBusy?: boolean;
  search?: (value: string) => void;
}

export const SearchForm: React.FC<
  Omit<InputProps, "value" | "onChange"> & SearchFormProps
> = (props) => {
  const { isBusy, search, ...rest } = props || {};
  const [inputValue, setInputValue] = React.useState("");

  const changeValue = (value: string) => {
    setInputValue(value);
    if (search) search(value);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value);
  };

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keywordsParam = params.get("keywords");
    if (keywordsParam) changeValue(keywordsParam);
  }, []);

  return (
    <form role="search" onSubmit={(e) => e.preventDefault()}>
      <InputGroup>
        <Input {...rest} value={inputValue} onChange={handleOnChange} />
        {isBusy && (
          <InputRightElement height="full">
            <Spinner size={rest.size} />
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
};
