import BookCard from './components/BookCard'
import styles from '/src/styles/BookCard.module.css'

function App() {

  return (
    <>
      <div className={styles.cardContainer}>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      </div>
    </>
  )
}

export default App
