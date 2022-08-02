import axios from "axios";

type AxiosResponse = {
  status: number;
  data: {
    token: string;
  };
};
const registerUser = async (credentials: object) => {
  try {
    const { status, data }: AxiosResponse = await axios.post(
      "http://localhost:8080/api/register",
      credentials
    );
    if (status === 200) {
      return data;
    }
    throw new Error(`The register request failed with status code: ${status}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { registerUser };
