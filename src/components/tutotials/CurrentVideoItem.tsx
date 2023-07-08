import { useEffect, useState } from "react"
import { twJoin } from "tailwind-merge"
import type { Video } from "~types/youtube"

export default function CurrentVideoItem({ video }: { video: Video }) {
  return (
    <section>
      <iframe
        src={`https://www.youtube.com/embed/${video.contentDetails.videoId}?rel=0`}
        title={video.snippet.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={"w-full aspect-video"}
      ></iframe>
      <div>
        <h3 className="py-4 text-3xl font-bold">{video.snippet.title}</h3>
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
      className={twJoin(
        "bg-neutral-200 rounded-xl p-4 lg:rounded-3xl mb-6 lg:mx-4 lg:m-0",
        !open && "cursor-pointer"
      )}
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

      {/* {open && (
                <button
                    className="px-4 py-2 font-medium text-sm bg-neutral-300 dark:bg-neutral-900 mt-4 rounded-full"
                    onClick={() => setOpen(false)}
                >
                    Close
                </button>
            )} */}
    </article>
  )
}
