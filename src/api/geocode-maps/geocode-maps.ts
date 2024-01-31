import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import {
  ReqReverseLocation,
  ReqReverseLocationQuery,
  ResReverseLocation,
} from './geocode-maps.types';

export class GeocodeMapsApi {
  baseUrl = 'https://geocode.maps.co';
  baseKey = 'open-meteo';

  private _getReverseLocation = async (params: ReqReverseLocationQuery) => {
    const response = await axios.get<ResReverseLocation>(`${this.baseUrl}/reverse`, {
      params,
    });
    return response.data;
  };

  getReverseLocation = (params: ReqReverseLocation) =>
    useQuery({
      queryKey: [this.baseKey, 'reverse', params],
      queryFn: () =>
        this._getReverseLocation({
          lat: params.lat,
          lon: params.lon,
          api_key: import.meta.env.VITE_GEOCODE_API_KEY || '',
        }),
      enabled: !!params,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    });
}
