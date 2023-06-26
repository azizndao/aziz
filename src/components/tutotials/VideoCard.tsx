import type { Video } from "../../types/youtube";

interface Props {
  video: Video;
  onClick: () => void;
}

export default function VideoItemCard({ video, onClick }: Props) {
  return (
    <button onClick={onClick} className="flex gap-4">
      <img
        className="w-4/12 aspect-video rounded-lg"
        src={video.snippet.thumbnails.medium.url}
      />
      <h6 className="text-start py-1 line-clamp-2">{video.snippet.title}</h6>
    </button>
  );
}
