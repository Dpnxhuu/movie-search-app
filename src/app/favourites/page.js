import MovieGrid from "../../components/movies/MovieGrid";
import PageShell from "../../components/movies/PageShell";
import { favouriteMovies } from "../../data/movies";

export default function FavouritesPage() {
  return (
    <PageShell
      title="Popular"
      subtitle="Trending movies people are watching right now."
    >
      <MovieGrid movies={favouriteMovies} />
    </PageShell>
  );
}
