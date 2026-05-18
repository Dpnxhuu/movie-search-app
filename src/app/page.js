import SearchBar from "../components/movies/SearchBar";
import MovieGrid from "../components/movies/MovieGrid";
import PageShell from "../components/movies/PageShell";

export default function HomePage() {
  return (
    <PageShell
      title="Discover Movies"
      subtitle="Search our collection — static demo with sample results below."
    >
      <section className="mb-10 flex justify-center">
        <SearchBar />
      </section>

      <section style={{minHeight: "600px"}}>
        <MovieGrid/>
      </section>
    </PageShell>
  );
}
