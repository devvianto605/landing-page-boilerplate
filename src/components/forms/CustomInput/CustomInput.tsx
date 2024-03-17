'use client';

import FormControl from '../FormControl/FormControl';
import { Input as InputComponent, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import type { CustomInputProps } from './type';

const CustomInput = <Model extends Record<string, unknown>>({
  name,
  formLabel,
  icon,
  type,
  labelColor,
  isValidateZodNumber,
  ...other
}: CustomInputProps<Model>): JSX.Element => {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext();

  const errorsMessage = errors[name]?.message as string;

  return (
    <FormControl errors={errorsMessage} formLabel={formLabel} labelColor={labelColor}>
      <InputGroup>
        <InputComponent
          isDisabled={isSubmitting}
          {...register(name, { valueAsNumber: isValidateZodNumber })}
          _focusVisible={{
            border: '1px solid #D4D4D4',
            outline: 'unset',
          }}
          _placeholder={{
            color: '',
            fontSize: '14px',
          }}
          type={type}
          {...other}
        />
        {icon ? (
          <InputRightElement color={'var(--primary-500)'} fontSize={'10px'} mx={'10px'}>
            {icon}
          </InputRightElement>
        ) : undefined}
      </InputGroup>
    </FormControl>
  );
};

export default CustomInput;
