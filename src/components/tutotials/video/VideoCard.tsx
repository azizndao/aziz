import type { Video } from "~types/youtube";
import styles from "./VideoCard.module.css";

interface Props {
  video: Video;
  onClick: () => void;
}

export default function VideoItemCard({ video, onClick }: Props) {
  return (
    <li>
      <button onClick={onClick} className={styles.video}>
        <img src={video.snippet.thumbnails.medium.url} />
        <h6 className={styles.headline}>{video.snippet.title}</h6>
      </button>
    </li>
  );
}
