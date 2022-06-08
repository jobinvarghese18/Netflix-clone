import Image from "next/image";
import { useEffect, useState } from "react";
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
        <div>
            <div><Image layout="fill"
                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                objectFit="cover" loader={null} /></div>
        </div>
    );
};