import axios from "axios";

export const axiosErrorResolver = (error: unknown): void => {
  if (axios.isAxiosError(error)) {
    const errorMessage =
      (error.response?.data as any)?.message || "Erro na requisição.";
    throw new Error(errorMessage);
  }
  throw new Error("Ocorreu um erro inesperado.");
};
