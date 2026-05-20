import MovieGrid from "../../components/movies/MovieGrid";
import PageShell from "../../components/movies/PageShell";

export default function PopularPage() {
  return (
    <PageShell
      title="Popular"
      subtitle="Trending movies people are watching right now."
    >
      <MovieGrid/>
    </PageShell>
  );
}
