import React from 'react';
import Movie from './Movie/Movie';
import { useSelector } from 'react-redux';

const Movielist = () => {
    const movies = useSelector((state) => state.movie.discover)
    return (
        <div className="container row g-2 py-3">
            {
                movies.map(movie => <Movie
                    key={movie.id}
                    movie={movie}
                ></Movie>)
            }
        </div>
    );
};

export default Movielist;