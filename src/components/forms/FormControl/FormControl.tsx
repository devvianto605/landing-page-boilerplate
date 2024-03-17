'use client';

import { type FC } from 'react';
import type { FormControlProps, FormErrorMessageProps, FormLabelProps } from '@chakra-ui/react';
import { FormControl as FormControlComponent, FormErrorMessage, FormLabel } from '@chakra-ui/react';

type FormControlWrapperProps = {
  isRequired?: boolean;
  errors?: string | undefined;
  children: React.ReactNode;
  formLabel: React.ReactNode;
  formControlProps?: FormControlProps;
  formLabelProps?: FormLabelProps;
  formErrorProps?: FormErrorMessageProps;
  labelColor?: string;
};

const FormControl: FC<FormControlWrapperProps> = (props) => {
  const {
    isRequired = false,
    errors,
    children,
    formLabel,
    formControlProps,
    formLabelProps,
    formErrorProps,
    labelColor,
  } = props;

  return (
    <FormControlComponent isInvalid={Boolean(errors)} isRequired={isRequired} {...formControlProps}>
      <FormLabel
        color={labelColor || ''}
        fontSize='14px'
        fontWeight={500}
        lineHeight='20px'
        textTransform='capitalize'
        {...formLabelProps}
      >
        {formLabel}
      </FormLabel>
      {children}
      <FormErrorMessage fontSize='xs' {...formErrorProps}>
        {errors}
      </FormErrorMessage>
    </FormControlComponent>
  );
};

FormControl.displayName = 'FormControl';
export default FormControl;
