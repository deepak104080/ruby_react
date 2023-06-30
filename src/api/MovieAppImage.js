import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const MovieAppImage = () => {

    const [apidata, setapidata] = useState([]);
    const [numPages, setNumPages] = useState([]);

    const callApiFn = async (pageNum) => {
        let temp = await fetch(`https://api.themoviedb.org/3/search/movie?query=marvel&api_key=c43eafb6cfde3357615b65d291332480&page=${pageNum}`)
        let data = await temp.json()
        console.log(data);
        setapidata(data.results);
        let num = Array(data.total_pages).fill(0);
        setNumPages(num);
    }

    const callApiUpdate = (num) => {
        callApiFn(num)
    }

    useEffect(() => {
        callApiFn(1);
    }, [])


    return (
        <div>
            <div>
                {
                    numPages && numPages.map((item, index) => (
                        <button key={index} className='btn btn-danger rounded-circle mx-2' onClick={() => callApiUpdate(index + 1)}>{index + 1}</button>
                    ))
                }
                <div className='row'>
                    {
                        apidata && apidata.map((item, index) => (
                            
                            <div className='col-3 my-4 mx-5 bg-light'>
                                <Link to={`/movieappimagedetails/${item.id}`}><img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} /></Link>
                                <h4>{item.title}</h4>
                                <div>{item.release_date}</div>
                                <div>{item.vote_average}</div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default MovieAppImage
