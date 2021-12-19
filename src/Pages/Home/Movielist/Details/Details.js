import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { movieId } = useParams()
    const [detail, setDetail] = useState()
    useEffect(() => {
        fetch('/moviesData.json')
            .then(res => res.json())
            .then(data => setDetail(data.find(data => +movieId === data.id)))
    }, [movieId])
    return (
        <div>
            <h2>Details of {detail?.name}</h2>
        </div>
    );
};

export default Details;