import './switch.style.css';
export function SwitchButton(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) {
  return (
    <label className="switch">
      <input type="checkbox" {...props} />
      <span className="slider round"></span>
    </label>
  );
}
