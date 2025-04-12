// import axios from "axios";

// const API_URL = "https://fakestoreapi.com";

// export const loginUser = async (username, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/login`, {
//       username,
//       password,
//     });
//     console.log(response);
//     return response.data.token;
//   } catch (error) {
//     throw new Error("Login failed. Please check your credentials.");
//   }
// };

// export const getProducts = async () => {
//   const response = await axios.get(`${API_URL}/products`);
//   return response.data;
// };

// export const getProductById = async (id) => {
//   const response = await axios.get(`${API_URL}/products/${id}`);
//   return response.data;
// };

// export const getCategories = async () => {
//   const response = await axios.get(`${API_URL}/products/categories`);
//   return response.data;
// };

// export const getProductsByCategory = async (category) => {
//   const response = await axios.get(`${API_URL}/products/category/${category}`);
//   return response.data;
// };
import axios from "axios";

const API_URL = "https://fakestoreapi.com";
const MOCK_API_URL = "http://localhost:3001";

export const loginUser = async (username, password) => {
  try {
    // Mock login check
    const response = await axios.get(`${MOCK_API_URL}/users`, {
      params: { username, password },
    });
    const user = response.data.find(
      (u) => u.username === username && u.password === password
    );
    if (!user) {
      throw new Error("Invalid username or password");
    }
    // Simulate JWT token
    return "mock-jwt-token-" + username;
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
