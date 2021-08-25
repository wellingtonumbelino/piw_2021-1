import axios from "axios";

export function login(login_data) {
  return axios({
    method: 'POST',
    url: "http://localhost:3000/api/user/signin",
    data: login_data
  })
}

export function registerUser(user) {
  return axios({
    method: "POST",
    url: "http://localhost:3000/api/user",
    data: user
  })
}