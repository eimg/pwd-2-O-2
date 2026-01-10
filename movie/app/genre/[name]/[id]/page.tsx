import Movie from "@/components/movie";
import { MovieType } from "@/types/global";

async function fetchGenres(id: string): Promise<MovieType[]> {
    const res = await fetch(
		`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
			},
		}
	);

    const data = await res.json();
    return data.results;
}

export default async function Genre({
	params,
}: {
	params: Promise<{ id: string; name: string }>;
}) {
	const { id, name } = await params;
    const movies = await fetchGenres(id);

	return (
		<div>
            <h2 className="pb-2 mb-4 border-b font-bold">{name}</h2>
            <div className="flex flex-wrap gap-3">
                {movies.map(movie => {
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
