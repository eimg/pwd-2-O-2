import { MovieType } from "@/types/global";
import Link from "next/link";

async function fetchPopular(): Promise<MovieType[]> {
	const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
		headers: {
			Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
		},
	});

	const data = await res.json();
	return data.results;
}

export default async function Home() {
	const popular = await fetchPopular();
	const url = "http://image.tmdb.org/t/p/w185";

	return (
		<div>
			<h2 className="pb-2 mb-4 border-b font-bold">Popular</h2>
			<div className="flex flex-wrap gap-3">
				{popular.map(movie => {
					return (
						<div
							key={movie.id}
							className="w-46 text-center">
							<Link href={`/view/${movie.id}`}>
								<img
									className="hover:scale-105 transition-all"
									src={url + movie.poster_path}
								/>
							</Link>
							<h3 className="mt-2">{movie.title}</h3>
							<div className="text-sm text-gray-600">
								{movie.release_date.split("-")[0]}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
