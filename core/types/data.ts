export type RawScorecardEntry = {
  id: number;
  'school.name': string;
  'school.city': string;
  'school.state': string;
  'location.lat': number;
  'location.lon': number;
};

export type ScorecardEntry = {
  id: string;
  name: string;
  location: {
    city: string;
    state: string;
    latitude: number;
    longitude: number;
  };
};
