import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromFinishedList } from '../../Redux/slices/movieSlice';

const FinishedMovies = (props) => {
    const { name, release, img } = props.finishedmovies;
    const dispatch = useDispatch();
    return (
        <div className='col-md-4 col-sm-12'>
            <div className="card CardBG" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top ImageCard" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{release}</p>
                    <button className='CustomButton1 mb-2'>Details</button>
                    <button onClick={() => dispatch(removeFromFinishedList(props.finishedmovies))} className='CustomButton2'>Remove From finished list</button>
                </div>
            </div>
        </div>
    );
};

export default FinishedMovies;