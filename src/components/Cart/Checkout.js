import classes from './Checkout.module.css'

const CheckOut = props => {
    return <form>
        <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type='text' id='name'/>
        </div>
        <div className={classes.control}>
            <label htmlFor='postal'>Street</label>
            <input type="text" id="postal"></input>
        </div>
        <div className={classes.control}>
            <label htmlFor='postal'>Postal Code</label>
            <input type="text" id="postal"></input>
        </div>
        <div className={classes.control}>
            <label htmlFor='postal'>City</label>
            <input type="text" id="postal"></input>
        </div>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button>Confirm</button>
    </form>
}

export default CheckOut;