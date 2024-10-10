import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: {
    page: string;
  };
}) {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <Pagination
        itemCount={100}
        pageSize={10}
        currentPage={parseInt(searchParams.page)}
      />
    </div>
  );
}
