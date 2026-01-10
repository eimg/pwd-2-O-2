export type GenreType = {
    id: string;
    name: string;
}

export type MovieType = {
	id: string;
	title: string;
	backdrop_path: string;
	poster_path: string;
	overview: string;
	release_date: string;
};

export type PersonType = {
    id: string;
    name: string;
    character: string;
    profile_path: string;
}