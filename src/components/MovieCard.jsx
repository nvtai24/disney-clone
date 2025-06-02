const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function MovieCard({ movie }) {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[110px] md:w-[200px] h-[200px] md:h-[300px] object-cover rounded-lg hover:border-[4px] hover:border-gray-400 hover:scale-110 transition-all duration-100 ease-in cursor-pointer"
      />
    </>
  );
}
