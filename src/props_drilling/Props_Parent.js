import React, { useState } from 'react';
import Props_ChildA from './Props_ChildA';

const Props_Parent = () => {
    const [name, setName] = useState('Test Name')
    return (
        <div>
            <div className='row'>
                <div className='col-12 mx-2 my-2 bg-primary'>
                    <h5>Parent Component - {name}</h5>
                    <Props_ChildA name={name}/>
                </div>
            </div>


        </div>
    )
}

export default Props_Parent
