import PropTypes from 'prop-types';
export default function FoodItems({items}){
    return(
        <>
            <ul className="list-group container">
                {
                    items.map((item , index )=>(
                        <li className="list-group-item p-4 text-center bg-primary text-light fw-bold fs-3" key={index}> {item} {console.log(index)}</li>
                    ))
                }
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