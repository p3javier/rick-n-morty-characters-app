export type AxiosResponse = {
  status: number;
  data: {
    loginStatus: "ok" | "error";
    user: string;
  };
};
