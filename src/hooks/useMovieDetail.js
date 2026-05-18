"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovieDetail = (id) => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

  useEffect(() => {
    if (!id) return;
    
    const fetchDetail = async () => {
      try {
        setError('')
        setLoading(true);
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        setDetail(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  return { detail, loading, error };
};

export default useMovieDetail;