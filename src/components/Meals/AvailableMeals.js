
import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState();
    useEffect(() => {
        const fetchMeals = async() => {
        setIsLoading(true);
        const response = await fetch('https://react-meals-eddae-default-rtdb.firebaseio.com/meals%20.json');
        if (!response.ok) {
            throw new Error('Something went wrong!')
        }
        const responseData = await response.json();
        const loadedMeals = []

        for (const key in responseData) {
            loadedMeals.push({
                id: key, 
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price

            })
        }
        console.log(loadedMeals)
        setMeals(loadedMeals)
        setIsLoading(false);
        }
         fetchMeals().catch(error => {
    setIsLoading(false);
            setHttpError(error.message)
         });
    },[])
    if (isLoading) {
        return (<section className={classes.MealsLoading}>
            <p>Loading...</p>
        </section>)
    }
    if (httpError) {
        return <section className={classes.MealsError}>
            <p>{httpError}</p>
        </section>
    }
    const mealsList = meals.map(meal => <MealItem key={meal.id} 
      name={meal.name} 
      description={meal.description} 
      price={meal.price}></MealItem>)
    return (<section className={classes.meals}>
        <ul>
            <Card>
            {mealsList}
            </Card>
        </ul>
    </section>)
}

export default AvailableMeals