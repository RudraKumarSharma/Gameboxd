import axios from "axios";

const rawg = axios.create({
  baseURL: "https://api.rawg.io/api",
});

export async function fetchFromRawg<T>(
  endpoint: string,
  params: any = {}
): Promise<T> {
  try {
    console.log(
      "RAWG API Key:",
      process.env.RAWG_API_KEY ? "Present" : "Missing"
    );
    console.log("Calling RAWG endpoint:", endpoint, "with params:", params);

    // Merge the API key with other params
    const allParams = {
      key: process.env.RAWG_API_KEY,
      ...params,
    };

    const res = await rawg.get(endpoint, { params: allParams });
    return res.data;
  } catch (error: any) {
    console.error("RAWG API Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error || error.message);
  }
}
