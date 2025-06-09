import axios from "axios";

const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
if (!githubToken) {
  throw new Error("GITHUB_TOKEN is not defined");
}

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${githubToken}`,
  },
});
