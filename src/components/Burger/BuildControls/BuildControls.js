import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = props => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}$</strong></p>
            {
                controls.map(control => {
                    return <BuildControl
                        key={control.label}
                        label={control.label}
                        added={() => props.addedIngredient(control.type)}
                        removed={() => props.removedIngredient(control.type)}
                        disabled={props.disabled[control.type]}
                    />
                })
            }
            <button
                className={classes.OrderButton}
                disabled={!props.purchaseable}
                onClick={props.showModal}
            >ORDER NOW</button>
        </div>
    );
};

export default buildControls;