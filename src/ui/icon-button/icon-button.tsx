export function IconButton({ iconClass, onClick }: IconButtonProps) {
  return (
    <button className="icon-button w-fit" onClick={() => onClick()}>
      <i className={'icon w-1 h-1 ' + iconClass}></i>
    </button>
  );
}

type IconButtonProps = {
  iconClass: string;
  onClick: () => void;
};
