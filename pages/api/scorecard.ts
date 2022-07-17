import type { NextApiRequest, NextApiResponse } from 'next';
import { API_ROUTE_SCORECARD_PER_PAGE_LIMIT } from '../../core';

const API_ENDPOINT = 'https://api.data.gov/ed/collegescorecard/v1/schools.json';
const API_KEY = process.env.SCORECARD_API_KEY;
const FIELDS = [
  'id',
  'school.name',
  'school.city',
  'school.state',
  'location.lat',
  'location.lon',
].join(',');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>,
) {
  const query = req.query;
  const { name } = query;

  try {
    const response = await fetch(
      `${API_ENDPOINT}?per_page=${API_ROUTE_SCORECARD_PER_PAGE_LIMIT}&school.name=${name}&fields=${FIELDS}&api_key=${API_KEY}`,
    );
    const json = await response.json();
    res.status(200).json(json);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load College Scorecard data' });
  }
}
