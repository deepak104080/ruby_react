import React from 'react';
import Props_ChildC_Context from './Props_ChildC_Context';

const Props_ChildB_Context = () => {
  return (
    <div>
        <div className='row'>
        <div className='col-12 mx-2 my-2 bg-secondary'>
            <h5>Child B Component</h5>
            <Props_ChildC_Context />
        </div>
      </div>
    </div>
  )
}

export default Props_ChildB_Context
