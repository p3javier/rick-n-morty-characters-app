import axios from "axios";
import { ICredentials } from "../../types/credentialsInterface";
import { AxiosResponse } from "../../types/axiosResponse";

const loginUser = async (credentials: ICredentials) => {
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
