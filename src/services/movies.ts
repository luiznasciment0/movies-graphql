import api from "./api"

export const fetchMovieByTitle = async (title: string) => {
    try {
        const response = await api.get('/', {
            params: { s: title, page: '1', r: 'json' },
        })
    
        return response
    } catch (error) {
        throw error
    }
}
