import axios from "axios";

type AxiosResponse = {
  status: number;
  data: {
    loginStatus: string;
    user: string;
  };
};
const loginUser = async (credentials: object) => {
  try {
    const { status, data }: AxiosResponse = await axios.post(
      "http://localhost:8080/api/login",
      credentials
    );

    const { loginStatus, user } = data;
    if (status === 200) {
      return { loginStatus, user };
    }
    throw new Error(`The login request failed with status code: ${status}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { loginUser };
