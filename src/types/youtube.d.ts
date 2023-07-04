export interface YoutubePageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface Thumbnail {
  url: string
  width: number
  height: number
}

export type AllThumbnails = Record<'default' | 'medium' | 'high', Thumbnail>

export interface Playlist {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: AllThumbnails
  }
  contentDetails: {
    itemCount: number
  }
}

interface Video {
  kind: 'youtube#playlistItem'
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: AllThumbnails
    channelTitle: string
    videoOwnerChannelTitle: string
    videoOwnerChannelId: string
    playlistId: string
    position: number
    resourceId: {
      kind: string
      videoId: string
    }
  }
  contentDetails: {
    videoId: string
    startAt: string
    endAt: string
    note: string
    videoPublishedAt: string
  }
  status: {
    privacyStatus: string
  }
}

export interface YoutubeResponse<T> {
  pageInfo: YoutubePageInfo
  items: T[]
  contentDetails: {
    itemCount: number
  }
}
