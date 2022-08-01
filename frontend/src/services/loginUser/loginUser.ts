import axios from "axios";

type AxiosResponse = {
  status: number;
  data: {
    token: string;
  };
};
const loginUser = async (credentials: object) => {
  try {
    const { status, data }: AxiosResponse = await axios.post(
      "http://localhost:8080/login",
      credentials
    );
    if (status === 200) {
      return data;
    }
    throw new Error(`The login request failed with status code: ${status}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { loginUser };
