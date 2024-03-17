import type { InputProps } from '@chakra-ui/react';

export type CustomInputProps<Model> = InputProps & {
  name: keyof Model;
  labelColor?: string;
  formLabel?: string;
  icon?: React.ReactElement;
  isValidateZodNumber?: boolean;
};
