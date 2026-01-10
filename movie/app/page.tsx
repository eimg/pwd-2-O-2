import Movie from "@/components/movie";
import { MovieType } from "@/types/global";

async function fetchPopular(): Promise<MovieType[]> {
	const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
		headers: {
			Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
		},
	});

	const data = await res.json();
	return data.results;
}

async function fetchNowPlaying(): Promise<MovieType[]> {
	const res = await fetch("https://api.themoviedb.org/3/movie/now_playing", {
		headers: {
			Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
		},
	});

	const data = await res.json();
	return data.results;
}

export default async function Home() {
	const popular = await fetchPopular();
	const nowPlaying = await fetchNowPlaying();

	return (
		<div>
			<h2 className="pb-2 mb-4 border-b font-bold">Now Playing</h2>
			<div className="flex flex-wrap gap-3">
				{nowPlaying.map(movie => {
					return (
						<Movie
							key={movie.id}
							movie={movie}
						/>
					);
				})}
			</div>

			<h2 className="mt-4 pb-2 mb-4 border-b font-bold">Popular</h2>
			<div className="flex flex-wrap gap-3">
				{popular.map(movie => {
					return (
						<Movie
							key={movie.id}
							movie={movie}
						/>
					);
				})}
			</div>
		</div>
	);
}
