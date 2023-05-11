import axios from "axios";

export const createUser = (body) => {
  return axios.post("https://contact.herokuapp.com/contact", body);
};

export const fetchAllUser = () => {
  return axios.get("https://contact.herokuapp.com/contact");
};

export const fetchUserById = (id) => {
  return axios.get(`https://contact.herokuapp.com/contact/${id}`);
};

export const fetchPutUserById = (id, body) => {
  return axios.put(`https://contact.herokuapp.com/contact/${id}`, body);
};

export const deleteUserById = (id) => {
  return axios.delete(`https://contact.herokuapp.com/contact/${id}`);
};
