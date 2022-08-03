type Location = {
  name: string;
  url: string;
};

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unkown";
  species: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  type: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
