import React from 'react';
import Props_ChildB from './Props_ChildB';

const Props_ChildA = (props) => {
  return (
    <div>
        <div className='row'>
        <div className='col-12 mx-2 my-2 bg-success'>
            <h5>Child A Component</h5>
            <Props_ChildB name={props.name}/>
        </div>
      </div>
    </div>
  )
}

export default Props_ChildA
