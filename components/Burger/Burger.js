import React from 'react';

import classes from './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient'




const burger = (props) => {
    
props = {
    ingridients: {
        salad: 0,
        bacon: 0,
        cheese:0,
        meat:0
    }
}

let transformedIngridients = Object.keys(props.ingridients).map(igKey => {
    return [...Array(props.ingridients[igKey])].map((_, i) => {
        return <BurgerIngridient key={igKey +i} type = {igKey} />
    })
}).reduce((arr, el) => {
return arr.concat(el)
}, [])
if (transformedIngridients.length === 0){
     transformedIngridients = <p>Please start adding ingredients!</p>
}
 

    return (
        <div className={classes.Burger}>
            <BurgerIngridient type='bread-top'/>
            {transformedIngridients}
            <BurgerIngridient type='bread-bottom'/>
            
            
           
        </div>
    );

}

export default burger;