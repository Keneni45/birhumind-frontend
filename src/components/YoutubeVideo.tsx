import YouTube from "react-youtube";

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  const opts = {
    playerVars: {
      autoplay: 0, // Do not autoplay the video
    },
  };

  return (
    <div className="relative pb-[56.25%] overflow-hidden w-full rounded-xl">
      <YouTube
        videoId={videoId}
        opts={opts}
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full"
        iframeClassName="w-full h-full" // Added to ensure iframe fills the container
      />
    </div>
  );
};

export default YouTubeVideo;
