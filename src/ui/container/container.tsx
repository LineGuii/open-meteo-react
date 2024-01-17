export function Container(
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
): JSX.Element {
  return (
    <div className="bg-zinc-100 container mx-auto px-4 py-4 flex flex-col" {...props} />
  );
}
