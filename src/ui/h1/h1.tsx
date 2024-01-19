export function H1(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
) {
  return (
    <h1 className="text-4xl font-bold" {...props}>
      {props.children}
    </h1>
  );
}
