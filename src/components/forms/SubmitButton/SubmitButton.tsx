/* eslint-disable complexity */
'use client';

import type { ButtonProps } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type SubmitButtonProps = ButtonProps & {
  isCheckDirty?: boolean;
  label: React.ReactNode;
  isLoading?: boolean;
};

const defaultProps = {
  fontSize: '18px',
  fontWeight: 600,
};

const SubmitButton = ({
  isCheckDirty = false,
  isLoading = false,
  label,
  isDisabled: isDisabledButton,
  ...other
}: SubmitButtonProps): JSX.Element => {
  const { formState } = useFormContext();
  const disabledDirty = isCheckDirty && !formState.isDirty;
  const isDisabled = formState.isSubmitting || disabledDirty;
  const { fontSize, fontWeight } = other;

  return (
    <Button
      {...other}
      _hover={{
        bgColor: '',
      }}
      fontSize={fontSize || defaultProps.fontSize}
      fontStyle='normal'
      fontWeight={fontWeight || defaultProps.fontWeight}
      isDisabled={isDisabledButton || isDisabled}
      isLoading={isLoading || formState.isSubmitting}
      lineHeight='20px'
      type='submit'
    >
      {label}
    </Button>
  );
};

export default SubmitButton;
