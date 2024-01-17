import './button.css';
export function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
): JSX.Element {
  return <button className="button solidLarge" type="button" {...props} />;
}
