import type { Playlist, Video, YoutubeResponse } from "../types/youtube"

export async function getAllPlaylists(
  part: string | undefined = "snippet,contentDetails",
) {
  try {
    const channelId = import.meta.env.YOUTUBE_CHANNEL_ID
    const apiKey = import.meta.env.YOUTUBE_API_KEY
    const api = import.meta.env.YOUTUBE_API_URL

    const url = new URL(`${api}/playlists`)
    url.searchParams.set("channelId", channelId)
    url.searchParams.set("maxResults", "50")
    if (part) url.searchParams.set("part", part)
    url.searchParams.set("key", apiKey)

    const response = await fetch(url)

    if (!response.ok) {
      console.error(response.status, response.statusText)
      return null
    }

    return (await response.json()) as YoutubeResponse<Playlist>
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getPlaylist(id: string) {
  try {
    const apiKey = import.meta.env.YOUTUBE_API_KEY
    const baseUrl = import.meta.env.YOUTUBE_API_URL

    const url = new URL(`${baseUrl}/playlistItems`)
    url.searchParams.set("playlistId", id)
    url.searchParams.set("key", apiKey)
    url.searchParams.set("maxResults", "50")
    url.searchParams.set("part", "snippet,contentDetails")

    const response = await fetch(url)
    if (!response.ok) {
      console.error(await response.text())
      return null
    }

    return (await response.json()) as YoutubeResponse<Video>
  } catch (error) {
    console.log(error)
    return null
  }
}
