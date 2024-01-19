import { ForecastValues } from '@pages/add-forecast/components/types';
import { forecastsState } from '@store/forecasts.store';
import { useRecoilValue } from 'recoil';

import { ForecastCard } from './forecast-card';

export function CurrentForecasts() {
  const forecasts = useRecoilValue(forecastsState);

  return (
    <div>
      <div className="grid gap-2 grid-flow-row grid-cols-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {forecasts?.map((f: ForecastValues) => (
          <ForecastCard key={`${f.latitude}-${f.longitude}`} forecast={f} />
        ))}
      </div>

      {!forecasts?.length && (
        <p className="text-center font-semibold text-md">Nenhuma previsão encontrada.</p>
      )}
    </div>
  );
}
