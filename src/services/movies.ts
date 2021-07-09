import rapidMoviesApi from "./api"

export const fetchMovieByTitle = async (title: string) => {
    try {
        const response = await rapidMoviesApi.get('/', {
            params: { s: title, page: '1', r: 'json' },
        })
    
        return response.data
    } catch (error) {
        throw error
    }
}
