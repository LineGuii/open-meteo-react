import axios from 'axios';

import { ReqForecast, ResForecast } from './open-meteo.types';

export class OpenMeteoApi {
  baseUrl = 'https://api.open-meteo.com/v1';

  getForecast = async (params: ReqForecast) => {
    const response = await axios.get<ResForecast>(`${this.baseUrl}/forecast`, { params });
    return response.data;
  };
}
