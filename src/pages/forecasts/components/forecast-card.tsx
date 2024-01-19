import { OpenMeteoApi } from '@api';
import { ForecastValues } from '@pages/add-forecast/components/types';
import { requestUnitsState } from '@store/units.store';
import { H1 } from '@ui';
import { useRecoilValue } from 'recoil';

import { ForecastData } from './forecast-data';

export function ForecastCard({ forecast }: ForecastCardProps) {
  const requestUnits = useRecoilValue(requestUnitsState);
  const { data, isFetching } = OpenMeteoApi.getForecast({
    latitude: Number(forecast.latitude),
    longitude: Number(forecast.longitude),
    current:
      'temperature_2m,wind_speed_10m,apparent_temperature,precipitation_probability',
    timezone: 'America/Sao_Paulo',
    precipitation_unit: requestUnits.precipitation_unit,
    temperature_unit: requestUnits.temperature_unit,
    wind_speed_unit: requestUnits.wind_speed_unit,
  });

  return (
    <div className="min-w-md max-w-md bg-white rounded-lg shadow py-4">
      <div className="flex flex-col items-center justify-center">
        <h3>
          Tempo agora em {forecast.latitude}, {forecast.longitude}
        </h3>
        {isFetching && <p>Carregando...</p>}
        {!isFetching && (
          <H1>
            {`${data?.current?.temperature_2m} ${data?.current_units?.temperature_2m}`}
          </H1>
        )}
      </div>
      {!isFetching && (
        <div className="px-6">
          <ForecastData
            title="VENTO"
            text={`${data?.current?.wind_speed_10m} ${data?.current_units?.wind_speed_10m}`}
          />
          <ForecastData
            color="pink"
            title="SENSAÇÃO TÉRMICA"
            text={`${data?.current?.apparent_temperature} ${data?.current_units?.apparent_temperature}`}
          />
          <ForecastData
            color="sky"
            title="PROBABILIDADE DE CHUVA"
            text={`${data?.current?.precipitation_probability}${data?.current_units?.precipitation_probability}`}
          />
        </div>
      )}
    </div>
  );
}

type ForecastCardProps = {
  forecast: ForecastValues;
};
