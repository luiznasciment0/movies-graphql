import axios from "axios";
import { config } from '../config'

export const rapidMoviesApi = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'x-rapidapi-key': config.API_KEY,
        'x-rapidapi-host': config.API_HOST,
        'Content-Type': 'application/json',
    }
})

const googleApisUrl = 'https://www.googleapis.com'

export const youtubeDataV3Api = axios.create({
    baseURL: 
        `${googleApisUrl}/youtube/v3/search?key=${config.YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=10&q=`,
    headers: {
        'Content-Type': 'application/json',
    }
})
