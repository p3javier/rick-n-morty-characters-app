import axios from "axios";
import { AxiosResponse } from "../../types/axiosResponse";
import { Character } from "../../types/characterInterface";

const getCharacter = async (id: number) => {
  try {
    const { status, data }: AxiosResponse<Character> = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (status === 200 && data) {
      return { status: "ok", data };
    }

    return { status: "error" };
  } catch (error) {
    console.error(error);
    return { status: "error", description: error };
  }
};

export { getCharacter };
