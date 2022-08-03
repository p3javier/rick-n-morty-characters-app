import axios from "axios";
import { ICredentials } from "../../types/credentialsInterface";
import { AxiosResponse } from "../../types/axiosResponse";
import { Login } from "../../types/loginInterface";

const loginUser = async (credentials: ICredentials) => {
  try {
    const { status, data }: AxiosResponse<Login> = await axios.post(
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
