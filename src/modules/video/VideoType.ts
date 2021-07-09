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

const SnippedType = new GraphQLObjectType({
    name: 'Snipped',
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
        etag: { type: GraphQLString },
        id: { type: VideoIDType },
        kind: { type: GraphQLString },
        snipped: { type: SnippedType },
    })
})

export default VideoType