import { ScorecardEntry, RawScorecardEntry } from '../types';

export const transformScorecardEntry = (
  entry: RawScorecardEntry,
): ScorecardEntry => ({
  id: String(entry.id),
  name: entry['school.name'],
  location: {
    city: entry['school.city'],
    state: entry['school.state'],
    latitude: entry['location.lat'],
    longitude: entry['location.lon'],
  },
});
