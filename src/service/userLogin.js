import axios from "axios";
async function userLogin({ email, password }) {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://127.0.0.1:3001/api/users/login",
      data: {
        email,
        password,
      },
    })
    const userLoggedIn = { loggedUser: data, isAuthenticated: true };
    localStorage.setItem("loggedUser", JSON.stringify(userLoggedIn));
    return userLoggedIn;
  } catch (error) {
    console.log(error);
  }
}

export default userLogin;
