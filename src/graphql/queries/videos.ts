import { GraphQLObjectType, GraphQLList } from "graphql"
import VideoType from "../../modules/video/VideoType"

const VideosQueryType = new GraphQLObjectType({
    name: 'VideosQueryType',
    fields: () => ({
        items: { type: GraphQLList(VideoType) },
    })
})

export default VideosQueryType