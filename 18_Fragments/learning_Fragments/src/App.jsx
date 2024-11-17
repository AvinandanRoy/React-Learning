import "./App.css"
import ErrorMessage from "./components/ErrorMessage"
import FoodItems from "./components/FoodItem"
import Heading from "./components/Heading"

export default function App(){
    let foodItems = ["Dal", "Green Vegetable" , "Rice & Bread", "Milk", "Fish", "Mutton", 'Chicken', 'Ghee']
    
    // let foodItems = []

    return(
        <>
            <Heading />
            <ErrorMessage items={foodItems} />
            <FoodItems  items = {foodItems} />
        </>
    )
}