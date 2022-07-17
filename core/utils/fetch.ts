import { API_ROUTE_SCORECARD } from '../constants';
import { RawScorecardEntry, ScorecardEntry } from '../types';
import { transformScorecardEntry } from './transform';

export const fetchScorecardData = async (search = '') => {
  const response = await fetch(`/api/${API_ROUTE_SCORECARD}?name=${search}`);
  const json = await response.json();
  const values: RawScorecardEntry[] = json?.results;
  return values.map(transformScorecardEntry).reduce(
    (acc, entry: ScorecardEntry) => ({
      ...acc,
      [String(entry.id)]: entry,
    }),
    {},
  );
};
