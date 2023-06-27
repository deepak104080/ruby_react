import React, { useContext } from 'react';
import Props_ChildD_Context from './Props_ChildD_Context';
import { PropsContext } from './Props_Parent_Context';

const Props_ChildC_Context = () => {

  const localTemp = useContext(PropsContext);
  //console.log('localTemp', localTemp)

  return (
    <div>
      <div className='row'>
        <div className='col-12 mx-2 my-2 bg-primary'>
            <h5>Child C Component - {localTemp}</h5>
            <Props_ChildD_Context/>
        </div>
      </div>
    </div>
  )
}

export default Props_ChildC_Context
