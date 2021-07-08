import { GraphQLObjectType, GraphQLString } from "graphql"

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        imdbID: { type: GraphQLString },
        Title: { type: GraphQLString },
        Year: { type: GraphQLString },
        Type: { type: GraphQLString },
        Poster: { type: GraphQLString },
    })
})

export default MovieType