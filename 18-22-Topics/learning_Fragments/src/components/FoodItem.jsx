import PropTypes from 'prop-types'

import Item from "./Item";

export default function FoodItems({items}){
    const handleByButtonClick =( item )=>{
        console.log(`${item.name } being bought..`)
    }
    return(
        <>
            <ul className="list-group container">
                <Item items={items} handleByButtonClick= {handleByButtonClick} />
            </ul>
        </>
    )
}


FoodItems.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string
      })
    )
};