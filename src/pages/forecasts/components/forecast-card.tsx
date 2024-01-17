import { OpenMeteoApi } from '@api';
import { ResForecast } from '@api/open-meteo/open-meteo.types';
import { ForecastValues } from '@pages/add-forecast/components/types';
import { H1 } from '@ui';
import { useEffect, useState } from 'react';

export function ForecastCard({ forecast }: ForecastCardProps) {
  const [data, setData] = useState<ResForecast>();
  useEffect(() => {
    OpenMeteoApi.getForecast({
      latitude: Number(forecast.latitude),
      longitude: Number(forecast.longitude),
      current: 'temperature_2m,wind_speed_10m',
    }).then((res) => {
      setData(res);
      console.log(res);
    });
  }, [forecast]);

  return (
    <div className="max-w-md bg-white rounded-lg shadow">
      <div className="flex flex-col items-center justify-center">
        <h3>
          Tempo agora em {forecast.latitude}, {forecast.longitude}
        </h3>
        <H1>
          {`${data?.current?.temperature_2m} ${data?.current_units?.temperature_2m}`}
        </H1>
      </div>
      <div>
        <p className="px-6">
          <div className="bg-green-400 w-1 h-3 rounded-sm inline-block mr-1" />
          {`${data?.current?.wind_speed_10m} ${data?.current_units?.wind_speed_10m}`}
        </p>
      </div>
    </div>
  );
}

type ForecastCardProps = {
  forecast: ForecastValues;
};
