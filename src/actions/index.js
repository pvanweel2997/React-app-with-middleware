import axios from 'axios';
import { FETCH_USERS } from './types';
import regeneratorRuntime from 'regenerator-runtime';

export function fetchUsers() {
  const response = axios.get('https://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    payload: response,
  };
}
