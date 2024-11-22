import PropTypes from 'prop-types';
import styles from './Container.module.css'


const Container =({children}) => {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

// Add propTypes validation
Container.propTypes = {
    children: PropTypes.node // or PropTypes.element if you expect a React element
  };

export default Container ;