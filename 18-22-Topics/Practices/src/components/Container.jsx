import PropTypes from 'prop-types';
import './Container.module.css'

const Container =( {children } )=>{
    return(
        <div className='parentContainer'>
            {children }
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node // or PropTypes.element if you expect a React element
  };

export default Container