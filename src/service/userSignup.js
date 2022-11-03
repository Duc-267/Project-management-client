import axios from "axios";
async function userSignup({ fullname, email, password }) {
  try {
    await axios({
      method: "post",
      url: "http://127.0.0.1:3001/api/users",
      data: {
        fullname,
        email,
        password,
      },
    })
  } catch (error) {
    console.log(error);
  }
}

export default userSignup;
