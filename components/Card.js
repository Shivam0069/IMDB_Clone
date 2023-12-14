import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
// var slugify = require("slugify");
export default function Card({ result }) {
  //   var link = result.title || result.name;
  //   link = slugify(link, "_");
  return (
    <div className=" cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group ">
      <Link href={`/movie/${result.id}`}>
        <div className="relative w-full h-48 sm:h-48 overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            layout="fill"
            objectFit="cover"
            className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="Image not available "
          />
        </div>

        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold mt-2">
            {result.title || result.name}
          </h2>
          <p className="flex items-center ">
            {result.release_date || result.first_air_date}
            <FaRegThumbsUp className="h-5 ml-3 mr-1" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
