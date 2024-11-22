import PropTypes from 'prop-types';
import Item from './Item';
export default function FoodItems({items}){

    const handleByOnClick =(event)=>{
        console.log(event )
    }

    return(
        <>
            <ul className="list-group container">
                <Item items={items} handleByOnClick ={handleByOnClick} />
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


//************************************************************************************ */
// When you have a stateless component as yours, the props argument contains the props, it's a plain object.

// You are trying to iterate over it, and it's not possible because it's an object and not an array.

// To add a proper prop-type check, you need to know (and tell us) the prop to check inside props.

// Let's say that your ListComponent has an items prop with inside a prop name, then you should something like this:

//ListComponent.propTypes = {
//     items: PropTypes.arrayOf(
//         PropTypes.shape({
//           name: PropTypes.string
//         })
//       )
//   };
// ************************************************************************************ *