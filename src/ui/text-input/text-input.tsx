export function TextInput(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
): JSX.Element {
  return <input className="py-1 px-2 color-gray-500 rounded-md" type="text" {...props} />;
}
