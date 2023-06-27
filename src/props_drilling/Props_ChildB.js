import React from 'react';
import Props_ChildC from './Props_ChildC';

const Props_ChildB = (props) => {
  return (
    <div>
        <div className='row'>
        <div className='col-12 mx-2 my-2 bg-secondary'>
            <h5>Child B Component</h5>
            <Props_ChildC name={props.name}/>
        </div>
      </div>
    </div>
  )
}

export default Props_ChildB
