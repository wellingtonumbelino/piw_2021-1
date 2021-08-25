import axios from 'axios';

export function listPosts(token) {
  return axios({
    method: "GET",
    url: "http://localhost:3000/api/post",
    headers: {
      "token": token
    }
  });
}

export function addPost(token, text) {
  return axios({
    method: "POST",
    url: "http://localhost:3000/api/post",
    headers: {
      "token": token
    },
    data: {
      "text": text
    }
  });
}