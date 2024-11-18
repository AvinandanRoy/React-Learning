import styles from './App.module.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display />
        <ButtonContainer />
        <Footer />
      </div>
    </>
  )
}