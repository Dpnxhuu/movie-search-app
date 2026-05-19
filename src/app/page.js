import SearchBar from "../components/movies/SearchBar";
import MovieGrid from "../components/movies/MovieGrid";
import PageShell from "../components/movies/PageShell";

export default function HomePage() {
  return (
    <PageShell
      title="Discover Movies"
      subtitle="Search millions of movies, explore what's trending, and find your next watch."
    >
      <section className="mb-10 flex justify-center">
        <SearchBar />
      </section>

      <section className="min-h-110 sm:min-h-120 md:min-h-130 lg:min-h-100">
        <MovieGrid/>
      </section>
    </PageShell>
  );
}
