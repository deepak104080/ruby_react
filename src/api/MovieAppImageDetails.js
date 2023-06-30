import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieAppImageDetails = () => {
    const movieid = useParams();

    console.log('Data from route - ', movieid.tempid);

    useEffect(() => {
        //api cal to fetch movie details
    }, [movieid])
    return (
        <div>
            <h2>Image Details Page</h2>
            <h4>Movie ID - {movieid.tempid}</h4>
        </div>
    )
}

export default MovieAppImageDetails



// hooks - React -  useState useEffect, useContext
// secondary hooks - React - useMemo, useCallback

// react supporting libraries hooks -

// third party library hooks - 


//HW
// Complete details api and plot the movie description