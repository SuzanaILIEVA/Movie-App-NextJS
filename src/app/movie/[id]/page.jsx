import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;

  const movieDetail = await getMovie(id);
  // console.log(movieDetail, "moviedetail");

  const dtvote = movieDetail?.vote_average >= 7 ? "bg-green-600" : "bg-red-600";
  return (
    <div className="relative p-7 min-h-screen ">
      <Image
        className="rounded-lg"
        fill
        objectFit="cover"
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail.backdrop_path || movieDetail.poster_path
        }`}
        alt="movie-image"
      />

      <div className="absolute">
        <div className="text-3xl font-bold my-4">{movieDetail?.title}</div>
        <div className="w-1/2 ">{movieDetail?.overview}</div>
        <div className="my-3">
          {movieDetail?.release_date} -{" "}
          <span className={`${dtvote} p-2 rounded-lg`}>
            IMDB: {parseFloat(movieDetail?.vote_average.toFixed(1))}
          </span>
        </div>
        <button className="border py-2 px-12 rounded-lg text-2xl font-bold my-3 hover:bg-white hover:text-black">
          Trail
        </button>
      </div>
    </div>
  );
};

export default Page;
