import { ForecastValues } from '@pages/add-forecast/components/types';
import { forecastsState } from '@store/forecasts.store';
import { useRecoilValue } from 'recoil';

import { ForecastCard } from './forecast-card';

export function CurrentForecasts() {
  const forecasts = useRecoilValue(forecastsState);

  return (
    <div className="grid gap-2 grid-flow-row-dense grid-cols-4">
      {forecasts?.map((f: ForecastValues) => (
        <ForecastCard key={`${f.latitude}-${f.longitude}`} forecast={f} />
      ))}
    </div>
  );
}
