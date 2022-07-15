import axios from 'axios';

const API_URL = 'http://localhost:3001/account/';

export const createUser = async (user) => {
  try {
    const userCreate = await axios.post(`${API_URL}register`, user);
    return userCreate;
  } catch (error) {
    return null;
  }
};

export const loginUser = async (user) => {
    try {
      const userCreate = await axios.post(`${API_URL}login`, user);
      return userCreate;
    } catch (error) {
      return null;
    }
  };