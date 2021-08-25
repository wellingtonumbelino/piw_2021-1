import axios from 'axios';

export function listComments(token, id) {
  return axios({
    method: "GET",
    url: `http://localhost:3000/api/post/:${id}/comments`,
    headers: {
      "token": token
    }
  });
}