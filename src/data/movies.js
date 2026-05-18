export const movies = [
  {
    id: "1",
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi, Thriller",
    rating: "8.8",
    plot: "A thief who steals corporate secrets through dream-sharing technology is offered a chance to have his criminal record erased — if he can plant an idea in a target's subconscious.",
    poster: "https://placehold.co/300x450/312e81/e0e7ff?text=Inception",
  },
  {
    id: "2",
    title: "The Dark Knight",
    year: 2008,
    genre: "Action, Crime, Drama",
    rating: "9.0",
    plot: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://placehold.co/300x450/1e3a5f/e0f2fe?text=Dark+Knight",
  },
  {
    id: "3",
    title: "Interstellar",
    year: 2014,
    genre: "Adventure, Drama, Sci-Fi",
    rating: "8.7",
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth becomes uninhabitable.",
    poster: "https://placehold.co/300x450/134e4a/d1fae5?text=Interstellar",
  },
  {
    id: "4",
    title: "Parasite",
    year: 2019,
    genre: "Comedy, Drama, Thriller",
    rating: "8.5",
    plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster: "",
  },
  {
    id: "5",
    title: "Spirited Away",
    year: 2001,
    genre: "Animation, Adventure, Family",
    rating: "8.6",
    plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    poster: "https://placehold.co/300x450/7c2d12/ffedd5?text=Spirited+Away",
  },
  {
    id: "6",
    title: "The Matrix",
    year: 1999,
    genre: "Action, Sci-Fi",
    rating: "8.7",
    plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth about his reality.",
    poster: "https://placehold.co/300x450/14532d/dcfce7?text=Matrix",
  },
  {
    id: "7",
    title: "Whiplash",
    year: 2014,
    genre: "Drama, Music",
    rating: "8.5",
    plot: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing.",
    poster: "",
  },
  {
    id: "8",
    title: "Blade Runner 2049",
    year: 2017,
    genre: "Sci-Fi, Thriller",
    rating: "8.0",
    plot: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
    poster: "https://placehold.co/300x450/4c1d95/ede9fe?text=Blade+Runner",
  },
];

export const favouriteMovies = movies.filter((m) =>
  ["1", "3", "5", "8"].includes(m.id)
);

export function getMovieById(id) {
  return movies.find((m) => m.id === id) ?? movies[0];
}
