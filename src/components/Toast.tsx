import * as React from "react";
import { useToast, UseToastOptions } from "@chakra-ui/react";

export function Toast(props: UseToastOptions) {
  const toast = useToast();

  React.useEffect(() => {
    toast(props);
  }, []);

  return null;
}
