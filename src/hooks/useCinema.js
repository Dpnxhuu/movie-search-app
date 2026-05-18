"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useCinema = (search) => {
  const [result, setResult] = useState(null);
  const [movies, setMovies] = useState(null);
  const [popularLoading, setPopularLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [popularError, setPopularError] = useState("");
  const [searchError, setSearchError] = useState("");

  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        setPopularError("");
        setPopularLoading(true);
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        );
        setMovies(res.data.results);
      } catch (error) {
        setPopularError(error);
      } finally {
        setPopularLoading(false);
      }
    };
    fetchPopular();
  }, []);

  const fetchMovie = useCallback(async () => {
    if (!search) return;
    try {
      setSearchError("");
      setSearchLoading(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`,
      );
      setResult(res.data.results);
    } catch (error) {
      setSearchError(error);
    } finally {
      setSearchLoading(false);
    }
  }, [search, API_KEY]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return { result, movies, popularLoading, searchLoading, searchError, popularError, retry: fetchMovie };
};

export default useCinema;