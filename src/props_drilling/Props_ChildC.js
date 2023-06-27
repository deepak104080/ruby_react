import React from 'react'

const Props_ChildC = (props) => {
  return (
    <div>
      <div className='row'>
        <div className='col-12 mx-2 my-2 bg-primary'>
            <h5>Child C Component - {props.name}</h5>
        </div>
      </div>
    </div>
  )
}

export default Props_ChildC
