import dotenv from "dotenv";

dotenv.config();

export const SHODAN_API_KEY = process.env.SHODAN_API_KEY || "";
export const CENSYS_API_ID = process.env.CENSYS_API_ID || "";
export const CENSYS_API_SECRET = process.env.CENSYS_API_SECRET || "";
export const HIBP_API_KEY = process.env.HIBP_API_KEY || "";
