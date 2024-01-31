import { GeocodeMapsApi, OpenMeteoApi } from '@api';
import { ForecastValues } from '@pages/add-forecast/components/types';
import { requestUnitsState } from '@store/units.store';
import { H1, Spinner } from '@ui';
import { useMemo } from 'react';
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

  const { data: locationData, isFetching: isLocationFetching } =
    GeocodeMapsApi.getReverseLocation({
      lat: Number(forecast.latitude),
      lon: Number(forecast.longitude),
    });

  const localName = useMemo(() => {
    if (isLocationFetching) {
      return <Spinner />;
    } else if (locationData == null || locationData?.error) {
      return `(${forecast.latitude}, ${forecast.longitude})`;
    }
    return locationData?.address?.city;
  }, [locationData, isLocationFetching, forecast]);

  return (
    <div className="w-full min-w-md bg-white rounded-lg shadow py-4">
      <div className="flex flex-col items-center justify-center">
        <h3>
          Tempo agora em <span className="font-semibold">{localName}</span>
        </h3>
        {isFetching && <Spinner />}
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
          <div className="flex flex-1 mt-2">
            <div className="flex-1"></div>
            <div className="text-sky-600 font-semibold cursor-pointer">Exibir mais</div>
          </div>
        </div>
      )}
    </div>
  );
}

type ForecastCardProps = {
  forecast: ForecastValues;
};
