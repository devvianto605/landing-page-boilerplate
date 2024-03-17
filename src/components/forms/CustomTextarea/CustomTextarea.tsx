'use client';

import FormControl from '../FormControl/FormControl';
import { InputGroup, Textarea } from '@chakra-ui/react';
import type { TextareaProps } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

type CustomTextareaProps<Model> = TextareaProps & {
  isRequired?: boolean;
  name: keyof Model;
  formLabel: string;
  labelColor?: string;
};

const CustomTextarea = <Model extends Record<string, unknown>>({
  isRequired = false,
  name,
  formLabel,
  labelColor,
  ...other
}: CustomTextareaProps<Model>): JSX.Element => {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext();

  const errorsMessage = errors[name]?.message as string;

  return (
    <FormControl errors={errorsMessage} formLabel={formLabel} isRequired={isRequired} labelColor={labelColor}>
      <InputGroup>
        <Textarea
          isDisabled={isSubmitting}
          {...register(name)}
          {...other}
          _focusVisible={{
            border: `1px solid`,
          }}
          _placeholder={{ color: '', fontSize: '14px', lineHeight: '20px' }}
        />
      </InputGroup>
    </FormControl>
  );
};

export default CustomTextarea;
