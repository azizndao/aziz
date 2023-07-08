import { twMerge } from "tailwind-merge";
import type { Video } from "~types/youtube";

interface Props {
  selected: boolean;
  video: Video;
  onClick: () => void;
}

export default function VideoItemCard({ video, onClick, selected }: Props) {
  return (
    <li>
      <button
        onClick={onClick}
        className={twMerge(
          "flex gap-7 w-full",
          selected && "bg-primary-300/50",
        )}
      >
        <img
          className="aspect-video h-[3.5rem] lg:h-[4.5rem] w-auto rounded-md"
          src={video.snippet.thumbnails.medium.url}
        />
        <h6 className="flex-8  text-start py-1 line-clamp-2 w-full">
          {video.snippet.title}
        </h6>
      </button>
    </li>
  );
}
