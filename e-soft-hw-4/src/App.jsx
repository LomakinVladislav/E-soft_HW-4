import PageWrapper from '/src/components/PageWrapper'
import Header from '/src/components/Header.jsx'
import SideBar from '/src/components/SideBar';
import styles from '/src/styles/App.module.css'

function App() {

  return (
    <>
    <main className={styles.content}>
      <header className={styles.header}>
        <Header/>
      </header>
      <aside className={styles.menu}>
        <SideBar/>
      </aside>

      <section className={styles.catalog}>
        <PageWrapper/>
      </section>

      <section className={styles.footer}>
        <h2>All rights are reserved. </h2> 
      </section>
    </main>
    </>
  )
}

export default App
