import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-6 pb-4">
      <p className="text-2xl md:text-3xl py-3 text-white">{title}</p>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => {
            if (movie.poster_path)
              return <MovieCard key={movie.id} poster={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
