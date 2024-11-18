import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <div className="mt-4">
            <hr/>
            <p className={styles.footer}>copyright<span className={styles.copyrightSymbol}>©</span>AvinandanRoy</p>
            <hr />
        </div>
    )
}

export default Footer ;