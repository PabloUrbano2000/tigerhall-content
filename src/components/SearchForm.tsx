import { InputGroup, Input, InputProps } from "@chakra-ui/react";

export const SearchForm: React.FC<InputProps> = (props) => {
  return (
    <form role="search" onSubmit={(e) => e.preventDefault()}>
      <InputGroup>
        <Input {...props} />
      </InputGroup>
    </form>
  );
};
