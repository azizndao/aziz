import type { Video } from "~types/youtube";
import VideoDescription from "./video-description/VideoDescription";

export default function CurrentVideoItem({ video }: { video: Video }) {
    return (
        <section>
            <iframe
                src={`https://www.youtube.com/embed/${video.contentDetails.videoId}?rel=0`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full aspect-video"
            ></iframe>
            <div>
                <h3 className="text-2xl lg:text-4xl font-bold py-4 px-4 lg:px-0">
                    {video.snippet.title}
                </h3>
                <VideoDescription description={video.snippet.description}/>
            </div>
        </section>
    );
}
