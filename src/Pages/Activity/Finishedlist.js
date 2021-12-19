import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import NavigateBar from '../Home/Navigation/NavigateBar';
import FinishedMovies from './FinishedMovies';

const Finishedlist = () => {
    const finishedList = useSelector((state) => state.movie.finishedlist)
    return (
        <>
            <NavigateBar></NavigateBar>
            <div className='container'>
                {
                    finishedList?.length === 0 && <h4 className='my-5'>
                        You have not finished yet. First finish a movie then add to finishedlist.
                    </h4>
                }
                <div className='row g-2 py-3'>
                    <h2 className='p-2'>You have finished <span className='textCusColor'>{finishedList?.length} movies/movies</span> </h2>
                    {
                        finishedList.map(finishedmovies => <FinishedMovies
                            key={finishedmovies.id}
                            finishedmovies={finishedmovies}
                        ></FinishedMovies>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Finishedlist;