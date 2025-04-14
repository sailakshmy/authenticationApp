import axios from "axios";
const API_KEY = "AIzaSyBKrobPpY9x1n6gV6xmDB9Xg4rMBdmJzGE";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const res = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = res.data.idToken;
  console.log(res.data, "res.data");
  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function loginUser(email, password) {
  return authenticate("signInWithPassword", email, password);
}
