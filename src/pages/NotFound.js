import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div className='bg-danger-subtle'>
                <h2>Page Not Found.</h2>
                <Link to="/">Click here to go to HomePage</Link>
            </div>
        </div>
    )
}

export default NotFound
