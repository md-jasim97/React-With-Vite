import React from 'react';
import './MainContainer.css'
import MainContainer from './MainContainer';
const Cards = (props) => {
    const {data} = props;
    return (
        <div className='card'>
            <p>ID : {data.id}</p>
            <p>Text : {data.Text}</p>
        </div>
    );
};

export default Cards;