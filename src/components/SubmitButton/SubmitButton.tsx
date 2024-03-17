'use client';

import type { ButtonProps } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type SubmitButtonProps = ButtonProps & {
  isCheckDirty?: boolean;
  label: React.ReactNode;
};

const SubmitButton = ({ isCheckDirty = false, label, ...other }: SubmitButtonProps): JSX.Element => {
  const { formState } = useFormContext();
  const disabledDirty = isCheckDirty && !formState.isDirty;
  const isDisabled = formState.isSubmitting || disabledDirty;

  return (
    <Button
      {...other}
      fontSize='14px'
      fontStyle='normal'
      fontWeight={500}
      isDisabled={isDisabled}
      isLoading={formState.isSubmitting}
      lineHeight='20px'
      type='submit'
    >
      {label}
    </Button>
  );
};

export default SubmitButton;
