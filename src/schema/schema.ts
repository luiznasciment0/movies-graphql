import { GraphQLSchema } from "graphql"
import RootQuery from "../graphql/queries/rootQuery"

const Schema = new GraphQLSchema({
    query: RootQuery,
})

export default Schema