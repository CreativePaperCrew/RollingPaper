import axios from 'axios';

const BASE_URL = process.env.REACT_APP_TEAM_BASE_API_URL;

const teamApiClient = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default teamApiClient;
