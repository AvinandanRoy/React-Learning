import styles from './FoodInput.module.css'
import { PropTypes } from 'prop-types';

const FoodInput =( {handleOnkeyDown} )=>{  

    return(
        <div className="d-flex justify-content-center mb-3 ">
            <input type="text" className= {`container w-75 ${styles.input}`} placeholder='Enter here...' onKeyDown={()=> handleOnkeyDown(event)} />
        </div>
    )
}

FoodInput.propTypes = {
    handleOnkeyDown : PropTypes.func.isRequired,
};

export default FoodInput ;