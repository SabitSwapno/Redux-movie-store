import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromWatchList } from '../../Redux/slices/movieSlice';

const WatchedMovies = (props) => {
    const { name, release, img } = props.watchedmovies;
    const dispatch = useDispatch();
    return (
        <div className='col-md-4 col-sm-12'>
            <div className="card CardBG" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top ImageCard" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{release}</p>
                    <button className='CustomButton1 mb-2'>Details</button>
                    <button onClick={() => dispatch(removeFromWatchList(props.watchedmovies))} className='CustomButton2'>Remove From watch list</button>
                </div>
            </div>
        </div>
    );
};

export default WatchedMovies;