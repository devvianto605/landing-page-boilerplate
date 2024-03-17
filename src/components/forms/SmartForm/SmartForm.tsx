/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import type { DefaultValues } from 'react-hook-form';
import type { z } from 'zod';

type GenericOnSubmit = (data: Record<string, any>, event?: React.BaseSyntheticEvent) => void;
type DefaultValueKeys<schema> = keyof DefaultValues<schema>;

type SmartFormProps<DataSchema extends Record<string, any>, Schema extends z.Schema<any, any>> = {
  schema: Schema;
  onSubmit: (data: DataSchema, event?: React.BaseSyntheticEvent) => void;
  children: React.ReactNode;
  defaultValues?: DefaultValues<DataSchema>;
  onFormChange?: (formValues: Record<DefaultValueKeys<DataSchema>, string>) => void;
};

const SmartForm = <DataSchema extends Record<string, any>, Schema extends z.Schema<any, any>>({
  schema,
  onSubmit,
  children,
  defaultValues,
  onFormChange,
}: SmartFormProps<DataSchema, Schema>): JSX.Element => {
  const methods = useForm({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    reValidateMode: 'onChange',
  });
  const { handleSubmit, watch } = methods;

  const mapValues = (): Record<DefaultValueKeys<DataSchema>, string> => {
    const obj = {} as Record<DefaultValueKeys<DataSchema>, unknown>;
    // eslint-disable-next-line @typescript-eslint/array-type
    const fields = Object.keys(defaultValues as object) as DefaultValueKeys<DataSchema>[];

    fields.forEach((key) => {
      obj[key] = watch(key as keyof typeof defaultValues);
    });

    return obj as Record<DefaultValueKeys<DataSchema>, string>;
  };

  return (
    <FormProvider {...methods}>
      <form
        onChange={onFormChange ? () => onFormChange(mapValues()) : undefined}
        onSubmit={handleSubmit(onSubmit as GenericOnSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

SmartForm.displayName = 'SmartForm';
export default SmartForm;
