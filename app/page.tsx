import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <Pagination itemCount={100} pageSize={10} currentPage={1} />
    </div>
  );
}
