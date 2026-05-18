import MovieGrid from "../../components/movies/MovieGrid";
import PageShell from "../../components/movies/PageShell";
import { favouriteMovies } from "../../data/movies";

export default function FavouritesPage() {
  return (
    <PageShell
      title="Favourites"
      subtitle="Movies you have saved — static demo list."
    >
      <MovieGrid movies={favouriteMovies} />
    </PageShell>
  );
}
