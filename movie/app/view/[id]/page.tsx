import { MovieType, PersonType } from "@/types/global";

async function fetchMovie(id: string): Promise<MovieType> {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
		headers: {
			Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
		},
	});

	return await res.json();
}

async function fetchCast(id: string): Promise<PersonType[]> {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}/credits`,
		{
			headers: {
				Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
			},
		}
	);

	const data = await res.json();
	return data.cast;
}

const url = "http://image.tmdb.org/t/p/w1280";
const person_url = "http://image.tmdb.org/t/p/w185";

export default async function View({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const movie = await fetchMovie(id);
	const cast = await fetchCast(id);

	return (
		<div>
			<h2 className="pb-2 mb-4 border-b font-bold">
				{movie.title} ({movie.release_date.split("-")[0]})
			</h2>
			<div>
				<img
					src={url + movie.backdrop_path}
					alt="Backdrop"
				/>
			</div>
			<div className="mt-3 mb-4">{movie.overview}</div>

			<h3 className="pb-2 mb-4 border-b font-bold">Cast</h3>
			<div className="flex flex-wrap gap-3">
				{cast.map(person => {
					return (
						<div
							key={person.id}
							className="w-46 text-center">
							{person.profile_path ? (
								<img
									src={person_url + person.profile_path}
									alt="Profile Photo"
								/>
							) : (
								<div className="w-46 h-69 bg-gray-300"></div>
							)}
							<h3 className="mt-2">{person.name}</h3>
							<div className="text-sm text-gray-600">
								{person.character}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
