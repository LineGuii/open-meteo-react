export function H1(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
) {
  return (
    <h1 className="text-3xl font-bold" {...props}>
      {props.children}
    </h1>
  );
}
