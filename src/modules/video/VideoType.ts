import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql"

const ThumbnailType = new GraphQLObjectType({
    name: 'Thumbnail',
    fields: () => ({
        height: { type: GraphQLInt },
        width: { type: GraphQLInt },
        url: { type: GraphQLString },
    })
})

const ThumbnailsType = new GraphQLObjectType({
    name: 'Thumbnails',
    fields: () => ({
        default: { type: ThumbnailType },
        high: { type: ThumbnailType },
        medium: { type: ThumbnailType },
    })
})

const SnippetType = new GraphQLObjectType({
    name: 'Snippet',
    fields: () => ({
        channelId: { type: GraphQLString },
        channelTitle: { type: GraphQLString },
        description: { type: GraphQLString },
        liveBroadcastContent: { type: GraphQLString },
        publishTime: { type: GraphQLString },
        publishedAt: { type: GraphQLString },
        thumbnails: { type: ThumbnailsType },
        title: { type: GraphQLString },
    })
})

const VideoIDType = new GraphQLObjectType({
    name: 'VideoID',
    fields: () => ({
        kind: { type: GraphQLString },
        videoId: { type: GraphQLString },
    })
})

const VideoType = new GraphQLObjectType({
    name: 'Video',
    fields: () => ({
        id: { type: VideoIDType },
        snippet: { type: SnippetType },
    })
})

export default VideoType