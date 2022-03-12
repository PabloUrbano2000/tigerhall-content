import {
  InputGroup,
  InputRightElement,
  Input,
  InputProps,
  Spinner,
} from "@chakra-ui/react";

interface SearchFormProps {
  isBusy?: boolean;
}

export const SearchForm: React.FC<InputProps & SearchFormProps> = (props) => {
  const { isBusy, ...rest } = props || {};
  return (
    <form role="search" onSubmit={(e) => e.preventDefault()}>
      <InputGroup>
        <Input {...rest} />
        {isBusy && (
          <InputRightElement height="full">
            <Spinner size={rest.size} />
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
};
