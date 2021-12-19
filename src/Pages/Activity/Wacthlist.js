import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import NavigateBar from '../Home/Navigation/NavigateBar';
import WatchedMovies from './WatchedMovies';

const Wacthlist = () => {
    const watchlist = useSelector((state) => state.movie.watchlist)
    return (
        <>
            <NavigateBar></NavigateBar>
            <div className='container'>
                {
                    watchlist?.length === 0 && <h4 className='my-5'>
                        You have not watched yet. First start watching a movie then add to watchlist.
                    </h4>
                }
                <div className='row g-2 py-3'>
                    <h2 className='p-2'>You have <span className='textCusColor'>{watchlist?.length} movies/movies to watch.</span> </h2>
                    {
                        watchlist.map(watchedmovies => <WatchedMovies
                            key={watchedmovies.id}
                            watchedmovies={watchedmovies}
                        ></WatchedMovies>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Wacthlist;