export function TextInput(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
): JSX.Element {
  return (
    <input
      className="py-1 px-2 color-gray-500 rounded-md box-border hover:border-neutral-600 hover:border-2"
      type="text"
      {...props}
    />
  );
}
