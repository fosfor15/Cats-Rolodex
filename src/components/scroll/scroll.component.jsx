import React from 'react';
import './scroll.styles.css';

const Scroll = (props) => {
    return (
        <div className="scroll-container">
            { props.children }
        </div>
    );
}

export default Scroll;
