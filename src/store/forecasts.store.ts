import { atom } from 'recoil';

export const forecastsState = atom({
  key: 'CurrentForecasts',
  default: localStorage.getItem('forecasts')
    ? JSON.parse(`${localStorage.getItem('forecasts')}`)
    : [],
});
