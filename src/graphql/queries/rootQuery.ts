import { GraphQLObjectType, GraphQLString } from "graphql"
import { fetchMovieByTitle } from "../../services/movies"
import { fetchYoutubeVideos } from "../../services/videos"
import MoviesQueryType from "./movies"
import VideosQueryType from "./videos"

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        moviesByTitle: {
            type: MoviesQueryType,
            args: {
                title: { type: GraphQLString },
            },
            resolve: async (parent, args) => {
                const { title } = args
                return await fetchMovieByTitle(title)
            },
        },
        videosByTitle: {
            type: VideosQueryType,
            args: {
                title: { type: GraphQLString },
            },
            resolve: async (parent, args) => {
                const { title } = args
                return await fetchYoutubeVideos(title)
            }
        }
    }
})

export default RootQuery