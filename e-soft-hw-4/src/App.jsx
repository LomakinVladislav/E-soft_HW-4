import PageWrapper from '/src/components/PageWrapper'
import Header from '/src/components/Header.jsx'
import SideBar from '/src/components/SideBar';
import styles from '/src/styles/App.module.css'
import ThemeSwitcher from '/src/components/ThemeSwitcher';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
      <main className={[styles.content, styles[`theme-${theme}`]].join(' ')}> 
        <header className={`${styles.header} ${styles[`theme-${theme}`]}`}>
          <Header/>
        </header>
        <aside className={`${styles.sideBar} ${styles[`theme2-${theme}`]}`}>
          <SideBar/>
        </aside>

        <section className={`${styles.catalog} ${styles[`theme2-${theme}`]}`}>
          <PageWrapper/>
        </section>

        <section className={`${styles.footer} ${styles[`theme-${theme}`]}`}>
          <h2>All rights are reserved. </h2> 
        </section>
      </main>
  )
}

export default App
