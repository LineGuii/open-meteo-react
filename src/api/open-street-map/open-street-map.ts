import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ReqMap, ResMap } from './open-street-map.types';

export class OpenStreetMap {
  baseUrl = 'https://master.apis.dev.openstreetmap.org/';
  baseKey = 'open-meteo';

  private _getMap = async (params: ReqMap) => {
    const response = await axios.get<ResMap>(`${this.baseUrl}/map`, { params });
    return response.data;
  };

  getMap = (params: ReqMap) =>
    useQuery({
      queryKey: [this.baseKey, 'map', params],
      queryFn: () => this._getMap(params),
      enabled: !!params,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    });
}
