import { twMerge } from "tailwind-merge"
import type { Video } from "~types/youtube"

interface Props {
  selected: boolean
  video: Video
  onClick: () => void
}

export default function VideoItemCard({ video, onClick, selected }: Props) {
  return (
    <li>
      <button
        onClick={onClick}
        className={twMerge(
          "flex w-full gap-7",
          selected && "bg-primary-300/50",
        )}
      >
        <img
          className="aspect-video h-[3.5rem] w-auto rounded-md lg:h-[4.5rem]"
          src={video.snippet.thumbnails.medium.url}
        />
        <h6 className="flex-8  line-clamp-2 w-full py-1 text-start">
          {video.snippet.title}
        </h6>
      </button>
    </li>
  )
}
