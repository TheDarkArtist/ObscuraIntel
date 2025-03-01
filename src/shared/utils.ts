import axios, { AxiosResponse } from "axios";

export const fetchData = async <T>(
  url: string,
  params: Record<string, unknown> = {},
  headers: Record<string, string> = {},
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(url, {
      params,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};
