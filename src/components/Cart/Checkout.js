import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  const [formInputsValidty, setFormInputsValidty] = useState({
    name: true,
    street: true,
    city: true, 
    postalCode: true
  })
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();
    const isEmpty = value => value.trim() === '';
    const isNotFiveChars = value => value.trim().legth == 5;
  const confirmHandler = (event) => {
    event.preventDefault();
     
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isNotFiveChars(enteredPostalCode)

    setFormInputsValidty({
      name: enteredNameIsValid, 
      street: enteredStreetIsValid,
      city: enteredCityIsValid, 
      postalCode: enteredPostalCodeIsValid
    })
    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }


  };
  const nameControlClasses = `${classes.control} ${formInputsValidty.name? '' : classes.invalid}`;
  const streetControlClasses = `${classes.control} ${formInputsValidty.street? '' : classes.invalid}`;
  const postalCodeControlClasses = `${classes.control} ${formInputsValidty.postalCode? '' : classes.invalid}`;
  const cityControlClasses = `${classes.control} ${formInputsValidty.city? '' : classes.invalid}`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputsValidty.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputsValidty.street && <p>Pleasae enter a valid street name</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!formInputsValidty.postalCode && <p>Pleasae enter a valid postal Code</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidty.city && <p>Pleasae enter a valid city name</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;