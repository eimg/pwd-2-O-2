import Link from "next/link";
import { MovieType } from "@/types/global";

const url = "http://image.tmdb.org/t/p/w185";

export default function Movie({ movie }: { movie: MovieType }) {
    return (
		<div className="w-46 text-center">
			<Link href={`/view/${movie.id}`}>
				{movie.poster_path ? (
					<img
						src={url + movie.poster_path}
						alt="Movie Poster"
					/>
				) : (
					<div className="w-46 h-69 bg-gray-300"></div>
				)}
			</Link>
			<h3 className="mt-2">{movie.title}</h3>
			<div className="text-sm text-gray-600">
				{movie.release_date.split("-")[0]}
			</div>
		</div>
	);
}