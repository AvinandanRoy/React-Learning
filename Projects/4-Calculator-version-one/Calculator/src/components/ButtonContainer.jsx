import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {

    const buttonList = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']

    return (
        <>
            <div className={styles.buttonContainer}>
                {
                    buttonList.map((buttonName, index) => (
                        <button key={index}> {buttonName} </button>
                    ))
                }

                {/* <button>C</button> */}

            </div>
        </>
    )
}

export default ButtonContainer;