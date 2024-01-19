export type ReqForecast = {
  latitude: number;
  longitude: number;
  current?: string;
  timezone?: string;
  temperature_unit?: string;
  wind_speed_unit?: string;
  precipitation_unit?: string;
};

export type ResForecast = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units?: {
    time?: string;
    interval?: IntervalUnits;
    temperature_2m?: '°C' | '°F';
    wind_speed_10m?: 'km/h' | 'mph';
    apparent_temperature?: '°C' | '°F';
    precipitation_probability?: '%';
  };
  current?: {
    time?: Date;
    interval?: number;
    temperature_2m?: number;
    wind_speed_10m?: number;
    apparent_temperature?: number;
    precipitation_probability?: number;
  };
};

export type IntervalUnits =
  | 'seconds'
  | 'milisseconds'
  | 'minutes'
  | 'hours'
  | 'days'
  | 'weeks'
  | 'months'
  | 'years';
