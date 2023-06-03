import React from 'react';
import '../styles/buttons.css';

function Buttons(props) {
/*     if (props.texto3) {
        return (<h1>Hello</h1>); 
    } */

/*     return (
        <>
            <div className='Buttons'>
                 <button>{props.texto}</button>
            </div>
        </>
    ) */

    return (
        <div className='Buttons'>
            <button>{props.texto}</button>
            <button>{props.texto2}</button>
        </div>
    )
}

export default Buttons;