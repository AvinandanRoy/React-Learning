import "./App.css"
import ErrorMessage from "./components/ErrorMessage"
import FoodInput from "./components/FoodInput"
import FoodItems from "./components/FoodItem"
import Heading from "./components/Heading"
import Container from './../../learning_Fragments/src/components/Container';
import { useState } from "react"

export default function App(){
    

    let [foodItems, setFoodItems] = useState([
        {name : "Green Vegetable"},
        {name : "Rice & Bread"},
        {name : "Milk"},
        {name : "Fish"},
        {name : "Mutton"},
        {name : "Chicken"},
    ]);

    const handleInputText =(event)=>{
        if(event.key === 'Enter'){
            let newFoodItem = event.target.value ;
            let newFoodItems = [...foodItems , {name : newFoodItem}];
            setFoodItems(newFoodItems)
        }
    }

    return(
        <Container>
            <Heading />
            <FoodInput handleInputText={handleInputText} />
            <ErrorMessage items={foodItems} />
            <FoodItems  items = {foodItems} />
        </Container>
    )
}