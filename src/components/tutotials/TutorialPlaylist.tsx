import { HtmlHTMLAttributes, useState } from "react";
import type { Video } from "../../types/youtube";

import { twJoin, twMerge } from "tailwind-merge";
import CurrentVideoItem from "./CurrentVideoItem";
import VideoItemCard from "./VideoCard";

export interface TutorialPlaylistProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  videos: Video[];
}

export default function TutorialPlaylist({
  videos,
  className,
  ...attrs
}: TutorialPlaylistProps) {
  const [currentVideo, setCurrentVideo] = useState(() => {
    return videos[0];
  });

  return (
    <div className={twMerge(className, "max-w-8xl mx-auto")} {...attrs}>
      <section className="max-w-[calc(var(--max-width)*0.7)]">
        <CurrentVideoItem video={currentVideo} />
      </section>
      <PlaylistSidebar videos={videos} setCurrentVideo={setCurrentVideo} />
    </div>
  );
}
function PlaylistSidebar({
  videos,
  setCurrentVideo,
}: {
  videos: Video[];
  setCurrentVideo: (video: Video) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <aside
        className={twMerge(
          "bg-neutral-50 dark:bg-neutral-900 transition-all px-4 lg:px-0 flex flex-col gap-1.5",
          "w-full lg:max-w-[calc((var(--max-width)*0.3)-1rem)] max-h-screen lg:max-h-[calc(100dvh-var(--header-height))]",
          "fixed z-10  inset-0 right-0 -translate-x-[100dvw] lg:translate-x-0 lg:right-[calc((100dvw-var(--max-width))/2)] lg:top-[var(--header-height)]",
          open && "translate-x-0"
        )}
      >
        <ul className="overflow-y-auto flex flex-col gap-2  pb-8 lg:pb-0 lg:mb-8">
          <h3 className="font-bold text-2xl sticky top-0 bg-primary-50/30 dark:bg-neutral-900/30  backdrop-blur-sm  px-1 py-3 lg:p-0">
            Playlist
          </h3>
          {videos.map((video) => (
            <li key={video.id}>
              <VideoItemCard
                video={video}
                onClick={() => {
                  setOpen(false);
                  setCurrentVideo(video);
                }}
              />
            </li>
          ))}
        </ul>
      </aside>
      <CloseButton open={open} onClick={() => setOpen(!open)} />
    </>
  );
}

function CloseButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={twJoin(
        "lg:hidden fixed z-50 right-4 bottom-4 bg-primary-500 dark:bg-neutral-700 rounded-full shadow-xl p-3",
        open
          ? "text-danger-500 dark:text-danger-300"
          : "text-primary-200 dark:text-primary-300"
      )}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
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
  );
}
