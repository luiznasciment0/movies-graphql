import { youtubeDataV3Api } from './api'

type YoutubeListItem = {
    etag: string
    id: {
        kind: string
        videoId: string
    }
    kind: string
    snipped: {
        channelId: string
        channelTitle: string
        description: string
        liveBroadcastContent: string
        publishTime: string
        publishedAt: string
        thumbnails: {
            default: {
                height: number
                url: string
                width: number
            }
            high: {
                height: number
                url: string
                width: number
            }
            medium: {
                height: number
                url: string
                width: number
            }
        }
        title: string
    }
}

type YoutubeListItems = {
    items: YoutubeListItem[]
}

export const fetchYoutubeVideos = async (query: string): Promise<YoutubeListItems> => {
    try {
        const response = await youtubeDataV3Api.get(`${query}`)

        return response.data.items
    } catch (error) {
        throw error
    }
}