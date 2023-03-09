import axios from "axios";

const apiRequests = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authorization = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const signIn = ({ email, password }) => apiRequests.post("/sign-in", { email, password });

export const signUp = ({ email, password, pictureUrl, username }) =>
  apiRequests.post("/sign-up", { email, password, pictureUrl, username });

export const getCurrentUser = (token) => apiRequests.get("/users/me", authorization(token));

export const getPosts = ({ desc, per, page, token }) =>
  apiRequests.get(
    "/posts",
    { ...(desc && { desc }), ...(per && { per }), ...(page && { page }) },
    authorization(token)
  );

export const createPost = ({ content, sharedUrl, token }) =>
  apiRequests.post("/posts", { content, sharedUrl }, authorization(token));
