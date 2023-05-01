import { formAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(formAnatomy.keys);

const baseStyle = definePartsStyle({
  helperText: {
    mt: '1'
  },
  errorMessage: {
    mt: '1'
  }
});

export const formTheme = defineMultiStyleConfig({ baseStyle });
