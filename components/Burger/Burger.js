import React from 'react';

import classes from './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient'




const burger = (props) => {
    
console.log('solve it')


    return (
        <div className={classes.Burger}>
            <BurgerIngridient type='bread-top'/>
            <BurgerIngridient type='bread-bottom'/>
            <BurgerIngridient type='meat'/>
            <BurgerIngridient type='cheese'/>
            
           
        </div>
    );

}

export default burger;