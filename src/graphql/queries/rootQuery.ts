import { GraphQLObjectType, GraphQLString } from "graphql"
import { fetchMovieByTitle } from "../../services/movies"
import MoviesQueryType from "./movies"

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        moviesByTitle: {
            type: MoviesQueryType,
            args: {
                Title: { type: GraphQLString },
            },
            resolve(parent, args) {
                const { Title } = args
                return fetchMovieByTitle(Title)
            }
        }
    }
})

export default RootQuery