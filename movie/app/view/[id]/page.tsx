export default async function View({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return (
		<div>
			<h2>View - {id}</h2>
		</div>
	);
}
