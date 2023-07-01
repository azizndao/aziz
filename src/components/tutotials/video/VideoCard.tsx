import type { Video } from "~types/youtube";
import styles from "./VideoCard.module.css";

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
        aria-selected={selected}
        className={styles.video}
      >
        <img
          className={styles.image}
          src={video.snippet.thumbnails.medium.url}
        />
        <h6 className={styles.headline}>{video.snippet.title}</h6>
      </button>
    </li>
  );
}
