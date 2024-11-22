import PropTypes from 'prop-types'
import styles from "./Item.module.css"

const Item = ({items, handleByButtonClick}) => {

    return (
        <>
            {
                items.map((item, index) => (
                    <li className={`list-group-item ${styles.item} `} key={index}>  
                        <span className="p-2 text-center text-light fw-bold fs-3">{item.name }</span>
                        <button className={`bg-success  ${styles.btn}`} onClick={()=> handleByButtonClick(item)}>Buy</button>
                    </li>
                ))
            }
        </>
    )
}


Item.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string
      })
    ).isRequired , 
    handleByButtonClick: PropTypes.func.isRequired,
};


export default Item;


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