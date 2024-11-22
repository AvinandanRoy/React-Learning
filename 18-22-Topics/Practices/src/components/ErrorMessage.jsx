import PropTypes from 'prop-types';


export default function ErrorMessage({items}){
    return(
        <>
            {
                items.length === 0 &&  <h2 className="text-center container text-light  bg-secondary py-3">You Have No Food Items </h2>
            }
        </>
    )
}

ErrorMessage.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string
      })
    )
};
