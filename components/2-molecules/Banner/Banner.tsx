import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlay } from 'react-icons/fa';
import { Button } from "../../1-atoms/button";
import { baseUrl } from "../../../constants/movie";
import { Movie } from "../../../typings.d";

interface Props {
    netflixOriginals: Movie[]
}
export const Banner = (props: Props) => {
    const { netflixOriginals } = props;
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
    }, [netflixOriginals]);

    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
            <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
                <Image layout="fill"
                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    objectFit="cover" loader={null} />
            </div>

            <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl ">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className="max-w-sx text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
                {movie?.overview}
            </p>

            <div>
                <Button text="Play" > <FaPlay className="h4 w-4 text-black md:h-8 md:w-8" /> </Button>
            </div>
        </div>
    );
};