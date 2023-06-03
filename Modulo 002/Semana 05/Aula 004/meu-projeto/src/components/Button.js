import React from 'react';
import '../styles/buttons.css';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <>
            <div className='buttons'>
                 <button type="submit">{props.texto}</button>
            </div>
        </>
    )
}

Button.propTypes = {
    texto:  PropTypes.string.isRequired,
    texto2: PropTypes.number.isRequired,
    texto3: PropTypes.bool,

};

export default Button;