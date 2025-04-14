import axios from "axios";
const API_KEY = "AIzaSyBKrobPpY9x1n6gV6xmDB9Xg4rMBdmJzGE";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const res = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(res.data, "res.data");
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function loginUser(email, password) {
  await authenticate("signInWithPassword", email, password);
}
