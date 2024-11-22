import styles from './FoodInput.module.css'
import { PropTypes } from 'prop-types';

const FoodInput =({handleInputText})=>{
    return(
        <>
            <input type="text" className= {`${styles.foodInput} container px-5 py-3 mt-3 mb-3`} onKeyDown={()=> handleInputText(event)} />
        </>
    )
}

FoodInput.propTypes = {
    handleInputText: PropTypes.func.isRequired,
};

export default FoodInput ;