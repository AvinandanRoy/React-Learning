import { useState } from "react"
import "./App.css"
import Container from "./components/Container"
import ErrorMessage from "./components/ErrorMessage"
import FoodInput from "./components/FoodInput"
import FoodItems from "./components/FoodItem"
import Heading from "./components/Heading"

export default function App() {

    let [foodItems, setFoodItems] = useState([
        { name: "Dal" },
        { name: "Green Vegetable" },
        { name: "Rice & Bread" },
        { name: "Milk" },
        { name: "Fish" },
        { name: "Mutton" },
        { name: "Chicken" },
        { name: "Ghee" }
    ])

    const handleOnkeyDown = (event) => {

        if (event.key === 'Enter'){
            let newFoodItem = event.target.value ;
            let newItems = [...foodItems, {name : newFoodItem}];
            setFoodItems(newItems);
            console.log(newItems);
        }
    }

    return (
        <Container>
            <Heading />
            <FoodInput handleOnkeyDown={handleOnkeyDown} />
            <ErrorMessage items={foodItems} />
            <FoodItems items={foodItems} />
        </Container>
    );
}