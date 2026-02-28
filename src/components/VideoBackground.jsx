import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    useMovieTrailer(movieId);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <iframe
                className="absolute top-1/2 left-1/2 w-[200vw] h-[112.5vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none md:w-[177.78vh] md:h-[56.25vw]"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    );
};

export default VideoBackground;