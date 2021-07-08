import dotenv from 'dotenv'

dotenv.config()

export const config = {
  BASE_URL: process.env.BASE_URL,
  API_KEY: process.env.API_KEY,
  API_HOST: process.env.API_HOST,
  PORT: process.env.PORT || 9000,
}