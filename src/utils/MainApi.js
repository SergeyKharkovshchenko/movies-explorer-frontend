/* eslint-disable prefer-promise-reject-errors */
import {
  baseUrlMyApi,
  baseUrlMyFrontend,
} from './config';

const getResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.statusText}`));

export const register = async (userName, email, password) => {
  const res = await fetch(`${baseUrlMyApi}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Origin: `${baseUrlMyFrontend}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userName,
      email,
      password,
    }),
  });
  if (res.ok) login(email, password);
  return getResponse(res);
};

export const handleProfileChange = async (name, email) => {
  const res = await fetch(`${baseUrlMyApi}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      Origin: `${baseUrlMyFrontend}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });
  return getResponse(res);
};

export const login = async (email, password) => {
  const res = await fetch(`${baseUrlMyApi}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Origin: `${baseUrlMyFrontend}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return getResponse(res);
};

export const logOut = async (_id) => {
  const res = await fetch(`${baseUrlMyApi}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Origin: `${baseUrlMyFrontend}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      _id,
    }),
  });
  return getResponse(res);
};

export const checkToken = async () => {
  const res = await fetch(`${baseUrlMyApi}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Origin: `${baseUrlMyFrontend}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return getResponse(res);
};

// export const baseUrl = baseUrlMyApi;
