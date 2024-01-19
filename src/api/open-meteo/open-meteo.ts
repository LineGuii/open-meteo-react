import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ReqForecast, ResForecast } from './open-meteo.types';

export class OpenMeteoApi {
  baseUrl = 'https://api.open-meteo.com/v1';
  baseKey = 'open-meteo';

  private _getForecast = async (params: ReqForecast) => {
    const response = await axios.get<ResForecast>(`${this.baseUrl}/forecast`, { params });
    return response.data;
  };

  getForecast = (params: ReqForecast) =>
    useQuery({
      queryKey: [this.baseKey, 'forecast', params],
      queryFn: () => this._getForecast(params),
      enabled: !!params,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    });
}
