import { Control, RegisterOptions, useController } from 'react-hook-form';

export function TextInput({
  control,
  name,
  defaultValue,
  ...rest
}: RhfTextInputProps): JSX.Element {
  const {
    field: { onChange, ref, value },
  } = useController({ control, name, defaultValue, rules: rest.rules });

  return (
    <input
      {...rest}
      value={value}
      ref={ref}
      className="py-1 px-2 color-gray-500 rounded-md box-border hover:border-neutral-600 hover:border-2"
      type="text"
      name={name}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        if (rest.onChange) {
          rest.onChange(event);
        }
        onChange(event);
      }}
    />
  );
}

export interface RhfTextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  control: Control<any>;
  name: string;
  rules?:
    | Omit<
        RegisterOptions<any, string>,
        'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
      >
    | undefined;
}
