import { atom, selector } from 'recoil';

export const unitsState = atom({
  key: 'UnitsForecasts',
  default: 'metric',
});

export const requestUnitsState = selector({
  key: 'RequestUnitsState',
  get: ({ get }) => {
    const units = get(unitsState);

    switch (units) {
      case 'metric':
        return {
          temperature_unit: undefined,
          wind_speed_unit: undefined,
          precipitation_unit: undefined,
        };
      case 'imperial':
        return {
          temperature_unit: 'fahrenheit',
          wind_speed_unit: 'mph',
          precipitation_unit: 'inch',
        };
      default:
        return {
          temperature_unit: undefined,
          wind_speed_unit: undefined,
          precipitation_unit: undefined,
        };
    }
  },
});
