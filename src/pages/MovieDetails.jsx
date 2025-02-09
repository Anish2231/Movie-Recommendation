import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        { params: { api_key: 'YOUR_TMDB_API_KEY' } }
      );
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div className="text-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row">
          <img
            className="w-full md:w-1/3 h-auto rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="mt-4 md:ml-8">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="mt-4 text-lg">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
