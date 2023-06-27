import React from 'react';
import Props_ChildB_Context from './Props_ChildB_Context';

const Props_ChildA_Context = () => {
  return (
    <div>
        <div className='row'>
        <div className='col-12 mx-2 my-2 bg-success'>
            <h5>Child A Component</h5>
            <Props_ChildB_Context/>
        </div>
      </div>
    </div>
  )
}

export default Props_ChildA_Context
