import axios from 'axios';

const TEAM_BASE_URL = process.env.REACT_APP_TEAM_BASE_API_URL;

const teamApiClient = axios.create({
  baseURL: TEAM_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default teamApiClient;
