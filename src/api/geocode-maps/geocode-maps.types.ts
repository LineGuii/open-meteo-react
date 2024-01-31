export type ReqReverseLocationQuery = {
  lat: number;
  lon: number;
  api_key: string;
};

export type ReqReverseLocation = {
  lat: number;
  lon: number;
};

export type ResReverseLocation = {
  error: string | undefined;
  place_id: number;
  licence: string;
  osm_type: 'relation' | string;
  osm_id: number;
  lat: number;
  lon: number;
  display_name: string;
  address: {
    suburb: string;
    city_district: string;
    city: string;
    municipality: string;
    county: string;
    state_district: string;
    state: string;
    'ISO3166-2-lvl4': 'BR-SP' | string;
    region: string;
    country: string;
    country_code: string;
  };
  boundingbox: string[];
};
