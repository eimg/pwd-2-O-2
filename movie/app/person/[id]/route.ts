import { NextRequest } from "next/server";

export async function GET(
	_req: NextRequest,
	ctx: RouteContext<"/person/[id]">
) {
    const { id } = await ctx.params;
    
	const res = await fetch(`https://api.themoviedb.org/3/person/${id}`, {
		headers: {
			Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
		},
	});

	const data = await res.json();

	return Response.json(data);
}
