import { baseUrlMyApi } from "./config";

const getResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Error: ${res.statusText}`);

export const register = async (userName, email, password) => {
  const res = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      Origin: "https://sergey-kh.dilpom.nomoredomainsclub.ru",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: email,
      password: password,
    }),
  });
  if (res.ok) login(email, password);
  return getResponse(res);
};

export const handleProfileChange = async (name, email) => {
  const res = await fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      Origin: "https://sergey-kh.dilpom.nomoredomainsclub.ru",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  });
  return getResponse(res);
};

export const login = async (email, password) => {
  const res = await fetch(`${baseUrl}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      Origin: "https://sergey-kh.dilpom.nomoredomainsclub.ru",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  return getResponse(res);
};

export const logOut = async (_id) => {
  const res = await fetch(`${baseUrl}/signout`, {
    method: "POST",
    credentials: "include",
    headers: {
      Origin: "https://sergey-kh.dilpom.nomoredomainsclub.ru",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: _id,
    }),
  });
  return getResponse(res);
};

export const checkToken = async () => {
  const res = await fetch(`${baseUrl}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Origin: "https://sergey-kh.dilpom.nomoredomainsclub.ru",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return getResponse(res);
};

export const baseUrl = baseUrlMyApi;
