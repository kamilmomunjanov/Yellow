import React, {useContext} from 'react';
import {CustomContext} from "../../../../Context";


const DateFilter = () => {
    const {active, setBefore, setAfter} = useContext(CustomContext)

    return (
        <>
            {
                active ?
                    <div className='section__jogs-date'>
                    <div className='section__jogs-form'>
                        <span className='section__jogs-text'>Date from</span>
                        <input onChange={(e)=> setBefore(e.target.value)} className='section__jogs-search' type="date"/>
                    </div>
                    <div className='section__jogs-form'>
                        <span className='section__jogs-text'>Date to</span>
                        <input onChange={(e)=> setAfter(e.target.value)}  className='section__jogs-search'  type="date"/>
                    </div>
                </div>
                    : ''
            }

        </>
    );
};

export default DateFilter;