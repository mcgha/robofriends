import React from 'react';
import Card from './Card';
//pure component, only need to know stuff for their own function
//props never change
const CardList = ({ robots }) => {
    const cardsArray = robots.map((user, i) => {
        return (<Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} 
        />
        );
    })
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;