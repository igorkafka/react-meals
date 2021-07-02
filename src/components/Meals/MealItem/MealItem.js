import { useContext } from 'react'

import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../store/cart-context'
const MealItem = props => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`
    const addToChartHander = amount => {
        cartCtx.addItem({id: props.id, name: props.name, amount: amount, price: props.price});
    }
    return (<li className={classes.meal}>
        <div>
        <div><h3>{props.name}</h3></div>
        <div className={classes.description}>{props.descriptoin}</div>
        <div className={classes.price}>{props.price}</div>
        </div>
        <div>
            <MealItemForm onAddToChart = {addToChartHander}/>
        </div>
    </li>)
}

export default MealItem;