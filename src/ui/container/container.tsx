import { NavBar } from '@ui/navbar';

export function Container(
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
): JSX.Element {
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className="bg-zinc-100 px-4 py-4 flex flex-col" {...props} />
    </div>
  );
}
