import axios from "axios";

const API_URL = "https://fakestoreapi.com";

// Use this credentials for login
// const username = "mor_2314";
// const password = "83r5^_";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });
    console.log(response);
    return response.data.token;
  } catch (error) {
    throw new Error("Login failed. Please check your credentials.");
  }
};

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(`${API_URL}/products/categories`);
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await axios.get(`${API_URL}/products/category/${category}`);
  return response.data;
};
