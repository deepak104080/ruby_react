import React, { useContext } from 'react';
import { GlobalContext } from '../App';

const Services = () => {

    const localTemp = useContext(GlobalContext);
    const {globalState, setGlobalState} = localTemp;

    const updateGlobalDataFn = (e) => {
        setGlobalState({...globalState, globalname: e.target.value})
    }

    return (
        <>
            <h2>Services Page</h2>
            <br></br>
            <div>{localTemp.globalState.globalname}</div>
            <div>{localTemp.globalState.globalcity}</div>
            <br></br>
            <input type='text' onBlur={updateGlobalDataFn}/>
        </>
    )
}

export default Services;