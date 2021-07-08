import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql"
import MovieType from "../../modules/movie/MovieType"

const MoviesQueryType = new GraphQLObjectType({
    name: 'MoviesQueryType',
    fields: () => ({
        Search: { type: GraphQLList(MovieType) },
        totalResults: { type: GraphQLString },
        Response: { type: GraphQLString },
    })
})

export default MoviesQueryType