const API_KEY = "AIzaSyBKrobPpY9x1n6gV6xmDB9Xg4rMBdmJzGE";
const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

async function createUser(email, password) {
  const res = await axios.post(SIGNUP_URL, {
    email,
    password,
    returnSecureToken: true,
  });
}
