import { HtmlHTMLAttributes, useState } from "react"
import { twMerge } from "tailwind-merge"
import CustomScrollArea from "~components/scroll-area/CustomScrollArea"
import type { Video } from "~types/youtube"
import CurrentVideoItem from "./CurrentVideoItem"
import VideoItemCard from "./VideoCard"

interface TutorialPlaylistProps extends HtmlHTMLAttributes<HTMLDivElement> {
    videos: Video[]
}

export default function TutorialPlaylist({
    videos,
    className,
    ...attrs
}: TutorialPlaylistProps) {
    const [currentVideo, setCurrentVideo] = useState(() => videos[0])

    return (
        <div
            className={twMerge(
                "max-w-[var(--max-width)] mx-auto w-full flex lg:grid lg:grid-cols-[7fr_3fr] flex-col gap-4 p-6 mb-12 overflow-x-hidden",
                className
            )}
            {...attrs}
        >
            <CurrentVideoItem video={currentVideo} />
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
            <div
                className={twMerge(
                    "fixed lg:sticky top-[var(--header-height)] max-w-[350px] lg:max-w-full w-full h-screen lg:h-[calc(100dvh-var(--header-height))] lg:shadow-none lg:p-0 max-w[400px] bg-background shadow-xl px-4 transition-[right] duration-[250ms] -right-[100vw]",
                    open && "-right-0"
                )}
            >
                <CustomScrollArea>
                    <ul className="flex flex-col gap-3">
                        <h3 className="sticky top-0 font-bold pl-1 text-lg bg-background">
                            Playlist
                        </h3>
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
        <button
            className={twMerge(
                "fixed z-10 right-6 bottom-6 bg-primary-500 text-primary-50 rounded-full shadow-2xl h-14 w-14 flex lg:hidden items-center justify-center"
            )}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
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
