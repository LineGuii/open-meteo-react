export function Form(
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >,
): JSX.Element {
  return <form {...props} />;
}
