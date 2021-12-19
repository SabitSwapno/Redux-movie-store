import React from 'react';
import { useDispatch } from 'react-redux';
import { addTofinishedList, addToWatchlist } from '../../../../Redux/slices/movieSlice';
import "./Movie.css"

const Movie = (props) => {
    const { name, release, img } = props.movie;
    const dispatch = useDispatch();
    return (
        <div className='col-md-4 col-sm-12'>
            <div className="card CardBG" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top ImageCard" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{release}</p>
                    <button onClick={() => dispatch(addToWatchlist(props.movie))} className='CustomButton1 mb-2'>Add to WatchList</button>
                    <button onClick={() => dispatch(addTofinishedList(props.movie))} className='CustomButton2'>Add to FinishedList</button>
                </div>
            </div>
        </div>
    );
};

export default Movie;