import Movies from "@/components/Movies";
import React from "react";
const Page = async ({ searchParams }) => {
  // console.log(searchParams.genre , "searchParams");

  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=${apiKey}`
  );

  const data = await res.json();

  // console.log(data, "data");

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
