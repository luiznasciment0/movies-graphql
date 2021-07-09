import axios from "axios";
import { config } from '../config'

const rapidMoviesApi = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'x-rapidapi-key': config.API_KEY,
        'x-rapidapi-host': config.API_HOST,
        'Content-Type': 'application/json',
    }
})

export default rapidMoviesApi