import BookCard from './components/BookCard'
import Header from '/src/components/Header.jsx'
import styles from '/src/styles/App.module.css'

function App() {

  return (
    <>
    <main className={styles.content}>
      <header className={styles.header}>
          <Header/>
      </header>
      <aside className={styles.menu}>
        Боковое меню
      </aside>

      <section className={styles.catalog}>
        Каталог
      </section>

      <section className={styles.footer}>
        О нас
      </section>
    </main>
    </>
  )
}

export default App
