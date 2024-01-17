export function Label(
  props: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >,
): JSX.Element {
  const { htmlFor, ...otherProps } = props;

  return <label htmlFor={htmlFor} {...otherProps} />;
}
