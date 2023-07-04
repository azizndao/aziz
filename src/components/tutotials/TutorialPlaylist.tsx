import { HtmlHTMLAttributes, useState } from "react"
import type { Video } from "~types/youtube"

import { twMerge } from "tailwind-merge"
import CustomScrollArea from "~components/scroll-area/CustomScrollArea"
import styles from "./TutorialPlaylist.module.css"
import CurrentVideoItem from "./current-video/CurrentVideoItem"
import VideoItemCard from "./video/VideoCard"

export interface TutorialPlaylistProps
    extends HtmlHTMLAttributes<HTMLDivElement> {
    videos: Video[]
}

export default function TutorialPlaylist({
    videos,
    className,
    ...attrs
}: TutorialPlaylistProps) {
    const [currentVideo, setCurrentVideo] = useState(() => {
        return videos[0]
    })

    return (
        <div className={twMerge(styles.root, className)} {...attrs}>
            <section className={styles.currentVideo}>
                <CurrentVideoItem video={currentVideo} />
            </section>
            <PlaylistSidebar
                videos={videos}
                currentVideoId={currentVideo.id}
                setVideo={setCurrentVideo}
            />
        </div>
    )
}

function PlaylistSidebar({
    videos,
    currentVideoId,
    setVideo: setVideo
}: {
    videos: Video[]
    currentVideoId: string
    setVideo: (video: Video) => void
}) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className={styles.playlist} aria-open={open}>
                <CustomScrollArea>
                    <ul>
                        <h3>Playlist</h3>
                        {videos.map((video) => (
                            <VideoItemCard
                                key={video.id}
                                selected={currentVideoId == video.id}
                                video={video}
                                onClick={() => {
                                    setOpen(false)
                                    setVideo(video)
                                }}
                            />
                        ))}
                    </ul>
                </CustomScrollArea>
            </div>
            <CloseButton open={open} onClick={() => setOpen(!open)} />
        </>
    )
}

function CloseButton({
    open,
    onClick
}: {
    open: boolean
    onClick: () => void
}) {
    return (
        <button className={styles.closeButton} onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
            >
                {open ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                    />
                )}
            </svg>
        </button>
    )
}
