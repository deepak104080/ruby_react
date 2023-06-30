import React, {useState, useEffect} from 'react'

const MovieApp = () => {

    const [apidata, setapidata] = useState([]);
    const [numPages, setNumPages] = useState([]);

    const callApiFn = async (pageNum) => {
        let temp = await fetch(`https://api.themoviedb.org/3/search/movie?query=abc&api_key=c43eafb6cfde3357615b65d291332480&page=${pageNum}`)
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
                    <button key={index} className='btn btn-danger rounded-circle mx-2' onClick={() => callApiUpdate(index+1)}>{index+1}</button>
            ))
        }
                <table className='table table-responsive table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Release Date</th>
                            <th>Popularity</th>
                            <th>Overview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apidata && apidata.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.release_date}</td>
                                    <td>{item.popularity}</td>
                                    <td>{item.overview}</td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default MovieApp
