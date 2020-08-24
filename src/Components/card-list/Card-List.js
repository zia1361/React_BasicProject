import React from 'react'
import Card from '../card/Card';

import './Card-List.css'
function CardList(props){
    return(
        <div className='card-list'>{
            props.monsters.map(monster => (<Card key={monster.id} monster={monster}/>))
        }</div>
    );
}
 export default CardList;