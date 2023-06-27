import React, { useState } from 'react';
import Props_ChildA_Context from './Props_ChildA_Context';

//syntax to create context variable.
export const PropsContext = React.createContext();

const Props_Parent_Context = () => {
    const [name, setName] = useState('Test Name')
    return (
        <div>
            <div className='row'>
                <div className='col-12 mx-2 my-2 bg-primary'>
                    <h5>Parent Component - {name}</h5>

                    {/* create context provider */}
                    <PropsContext.Provider value={name}>
                        <Props_ChildA_Context/>
                    </PropsContext.Provider>

                </div>
            </div>


        </div>
    )
}

export default Props_Parent_Context


// Context - Provider, Consumer, Context_Variable

// props - Sender, Receiver