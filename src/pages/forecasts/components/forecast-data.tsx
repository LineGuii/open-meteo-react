import { useMemo } from 'react';

export function ForecastData(props: ForecastDataProps) {
  const colorVariants = useMemo(
    () => ({
      blue: 'bg-blue-400 w-1 h-3 rounded-sm inline-block mr-1',
      red: 'bg-red-400 w-1 h-3 rounded-sm inline-block mr-1',
      sky: 'bg-sky-400 w-1 h-3 rounded-sm inline-block mr-1',
      pink: 'bg-pink-400 w-1 h-3 rounded-sm inline-block mr-1',
      emerald: 'bg-emerald-400 w-1 h-3 rounded-sm inline-block mr-1',
      black: 'bg-gray-400 w-1 h-3 rounded-sm inline-block mr-1',
      green: 'bg-green-400 w-1 h-3 rounded-sm inline-block mr-1',
    }),
    [props.color],
  );

  return (
    <div className="flex flex-1">
      <div className="flex-1">
        <div className={`${colorVariants[props.color]}`} />
        <span className="text text-opacity-10 font-semibold">{props.title}</span>
      </div>
      <div>{props.text}</div>
    </div>
  );
}

ForecastData.defaultProps = {
  color: 'green',
};

type ForecastDataProps = {
  text: string;
  title: string;
  color: 'blue' | 'red' | 'sky' | 'pink' | 'emerald' | 'black' | 'green';
};
