export default async function Genre({
	params,
}: {
	params: Promise<{ id: string; name: string }>;
}) {
	const { id, name } = await params;

	return (
		<div>
			<h2>{name}</h2>
		</div>
	);
}
