import Pagination from "./components/Pagination";

export default function Home({
	searchParams,
}: {
	searchParams: { page: string };
}) {
	const page = parseInt(searchParams.page);
	return <Pagination itemCount={100} pageSize={10} currentPage={page} />;
}
