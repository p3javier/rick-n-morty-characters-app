import axios from "axios";

const loginUser = async (credentials: object) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/login",
      credentials
    );
    if (response.status === 200) {
      return response.data;
    }
    throw new Error(
      `The login request failed with status code: ${response.status}`
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { loginUser };
