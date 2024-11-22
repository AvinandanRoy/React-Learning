
import { PropTypes } from 'prop-types';

const Item = ({ items, handleByOnClick }) => {

    return (
        <>
            {
                items.map((item, index) => (
                    <li className="list-group-item p-4  bg-primary text-light fw-bold fs-3 d-flex justify-content-between" key={index}>
                        <span> {item.name} </span>
                        <button onClick={() => handleByOnClick(item.name)}>Buy</button>
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
    ).isRequired,
    handleByOnClick: PropTypes.func.isRequired,
};

export default Item 