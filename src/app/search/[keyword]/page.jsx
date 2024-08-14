import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  // console.log(keyword, "keyword");

  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  console.log(apiKey, "API Key");

  const rest = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await rest.json();
  console.log(data.results);

  return (
    <div  >
      {!data.results ? (
        <div>No Results Found!!!</div>
      ) : (
        <div className="flex flex-wrap gap-3 items-center justify-center ">
          {data.results.map((dt, key) => (
            <div
              className=" max-h-[300px] object-cover overflow-hidden  rounded-lg  "
              style={{ height: "300px", width: "470px"  }}
            >
              <Movies key={key} dt={dt} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
