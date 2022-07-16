import axios from 'axios';

const API_URL = 'http://localhost:3001/account/';

export const createUser = async (user) => {
  try {
    const userCreate = await axios.post(`${API_URL}register`, user);
    return userCreate.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (user) => {
  try {
    const { data } = await axios.post(`${API_URL}login`, user);
    return data.token;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (user, token) => {
  try {
    const update = await axios.put(`${API_URL}personal-information`,
      user,
      { headers: { authorization: token } });
    return update.data;
  } catch (error) {
    console.log(error);
  }
};

export const firstAccessUser = async (token) => {
  try {
    const firstAccess = await axios.get(`${API_URL}check-first-access`,
      { headers: { 'Authorization': token } });
    return firstAccess.data;
  } catch (error) {
    console.log(error);
  }
};