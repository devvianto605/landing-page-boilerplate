/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { FormProvider, useForm } from 'react-hook-form';

import type { DefaultValues } from 'react-hook-form';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type GenericOnSubmit = (data: Record<string, any>, event?: React.BaseSyntheticEvent) => void;

type SmartFormProps<DataSchema extends Record<string, any>, Schema extends z.Schema<any, any>> = {
  schema: Schema;
  onSubmit: (data: DataSchema, event?: React.BaseSyntheticEvent) => void;
  children: React.ReactNode;
  defaultValues?: DefaultValues<DataSchema>;
};

const SmartForm = <DataSchema extends Record<string, any>, Schema extends z.Schema<any, any>>({
  schema,
  onSubmit,
  children,
  defaultValues,
}: SmartFormProps<DataSchema, Schema>): JSX.Element => {
  const methods = useForm({
    defaultValues,
    mode: 'all',
    resolver: zodResolver(schema),
    reValidateMode: 'onChange',
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit as GenericOnSubmit)}>{children}</form>
    </FormProvider>
  );
};

SmartForm.displayName = 'SmartForm';
export default SmartForm;
