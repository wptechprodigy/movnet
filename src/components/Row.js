import React, { useState, useEffect } from 'react';
import { instance } from '../utils/axios';

const imageBaseUrl = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row__poster */}

        {movies.map((movie) => <img key={movie.id} src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.name} />)}
      </div>
    </div>
  );
}

export default Row;
