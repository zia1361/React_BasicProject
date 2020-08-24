import React from 'react';

import './Card.css';

function Card(props){
    return (
        <div className='card'>
            
            <img alt={props.monster.name} src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
            <h2 key={props.monster.id}>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
        </div>
    );
}
export default Card;