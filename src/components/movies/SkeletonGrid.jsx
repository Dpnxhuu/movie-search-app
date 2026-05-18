"use client"
import { useContext } from "react";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { myContext } from "@/context/apiData";

export default function SkeletonGrid() {

  const {movies} = useContext(myContext);

  return (
    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {movies?.map((pop) => (
        <MovieCardSkeleton key={pop.id} />
      ))}
    </div>
  );
}
