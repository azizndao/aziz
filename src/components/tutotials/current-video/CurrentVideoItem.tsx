import { useEffect, useState } from "react"
import { twJoin } from "tailwind-merge"
import type { Video } from "~types/youtube"
import styles from "./CurrentVideo.module.css"

export default function CurrentVideoItem({ video }: { video: Video }) {
    return (
        <section>
            <iframe
                src={`https://www.youtube.com/embed/${video.contentDetails.videoId}?rel=0`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={styles["video-frame"]}
            ></iframe>
            <div>
                <h3 className={styles.headline}>{video.snippet.title}</h3>
                <VideoDescription description={video.snippet.description} />
            </div>
        </section>
    )
}

function VideoDescription({ description }: { description: string }) {
    const [open, setOpen] = useState(true)

    useEffect(() => {
        setOpen(true)
    }, [description])

    return (
        <article
            className={twJoin(styles.description, !open && "cursor-pointer")}
            onClick={() => {
                if (!open) setOpen(true)
            }}
        >
            <h3 className="text-2xl font-bold">Description</h3>
            <section
                className={twJoin(open ? "" : "line-clamp-1")}
                onClick={() => setOpen(true)}
            >
                {description.split("\n").map((paragraph, index) => (
                    <p className="py-2" key={index}>
                        {paragraph}
                    </p>
                ))}
            </section>

            {open && (
                <button
                    className="px-4 py-2 font-medium text-sm bg-neutral-300 dark:bg-neutral-900 mt-4 rounded-full"
                    onClick={() => setOpen(false)}
                >
                    Close
                </button>
            )}
        </article>
    )
}
