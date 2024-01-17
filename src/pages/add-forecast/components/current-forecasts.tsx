import { forecastsState } from '@store/forecasts.store';
import { Button } from '@ui';
import { useRecoilState } from 'recoil';

import { ForecastValues } from './types';

export function CurrentForecasts(): JSX.Element {
  const [forecasts, setForecasts] = useRecoilState(forecastsState);

  const handleDelete = (f: ForecastValues) => {
    localStorage.setItem(
      'forecasts',
      JSON.stringify(forecasts.filter((o: ForecastValues) => o !== f)),
    );
    setForecasts((old: ForecastValues[]) => old.filter((o) => o !== f));
  };

  return (
    <div>
      {forecasts &&
        forecasts.map((f: ForecastValues) => (
          <div
            className="grid gap-2 grid-flow-row-dense grid-cols-4"
            key={`${f.latitude}-${f.longitude}`}
          >
            <div className="flex-1">{f.latitude}</div>
            <div className="flex-1">{f.longitude}</div>
            <Button onClick={() => handleDelete(f)}>x</Button>
            <div style={{ flex: 2 }} />
          </div>
        ))}
    </div>
  );
}
