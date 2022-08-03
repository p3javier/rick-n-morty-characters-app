import axios from "axios";
import { AxiosResponse } from "../../types/axiosResponse";
import { IAllCharacters } from "../../types/allCharactersInterface";

const getAllCharacters = async () => {
  try {
    const { status, data }: AxiosResponse<IAllCharacters> = await axios.get(
      "https://rickandmortyapi.com/api/character"
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

export { getAllCharacters };
