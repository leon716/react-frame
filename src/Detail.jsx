import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { test2 } from './Service';

const Detail = ({match}) => {
    const post = async () => {
        let json = await test2();
        console.log(json);
    }
    useEffect(() => {
        post();
    }, [])
    return (
        <div>
            <h2>Detail {match.params.id}</h2>
            <Link to="/"><button>Home</button></Link>
        </div>
    );
};

export default Detail;