import React, { useState, useEffect } from 'react';
import ReactTypes from 'prop-types';


const CounterApp = ({ value =15 }) => {
    
    const [ counter, setCounter ] = useState( value );


    useEffect( () => {
        document.title = `You clicked ${ counter } times`
    });


    // function handleStatusChange(status) {
    //     setCounter(status.isOnline);
    // }


    //handleAdd
    const handleAdd = () => setCounter( counter +1 );
    const handleSub = () => setCounter( counter - 1);
    const handleReset = () => setCounter( value );
    


        return(
            <>
                <h1>CounterApp</h1>
                <h2>{ counter }</h2>
                <button onClick={ handleAdd }>+1</button>
                <button onClick={ handleReset }>Reset</button>
                <button onClick={ handleSub }>-1</button><br></br>
            </>
        );
};


CounterApp.prototype = {
    counter: ReactTypes.numeric,
};


// const Example = () => {
//     const [ count, setCount ] = useState( 0 );
//     useEffect( () => {
//         document.title = `You clicked ${ count } times`
//     });

//     const handleTitle = () => setCount( count + 1 );

//     return(
//         <>
//             <p>You clicked { count } times</p>
//             <button onClick={ handleTitle }>Clic me</button>
//         </>
//     );

// };

export{
    CounterApp,
    // Example
}