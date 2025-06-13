import { useTheme } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PageWrapper from '/src/components/PageWrapper'
import Header from '/src/components/Header.jsx'
import SideBar from '/src/components/SideBar';
import BookPage from '/src/components/BookPage';
import SettingsPage from '/src/components/SettingsPage';
import BookReader from '/src/components/BookReader';
import NotFound from '/src/components/NotFound';

import { AppProvider } from './context/AppContext';
import { TextSettingsProvider } from './context/TextSettingsContext';

import styles from '/src/styles/App.module.css'

function App() {
  const { theme } = useTheme();

  return (
    <AppProvider>
    <TextSettingsProvider>
    <Router>
      <main className={[styles.content, styles[`theme-${theme}`]].join(' ')}> 
        <header className={`${styles.header} ${styles[`theme-${theme}`]}`}>
          <Header/>
        </header>
        <aside className={`${styles.sideBar} ${styles[`theme2-${theme}`]}`}>
          <SideBar/>
        </aside>
        <Routes>
          <Route path="/" element={
                <section className={`${styles.catalog} ${styles[`theme2-${theme}`]}`}>
                  <PageWrapper/>
                </section>
              } />
          <Route path="/book/:id" element={
                <section className={`${styles.catalog} ${styles[`theme2-${theme}`]}`}>
                  <BookPage/>
                </section>
              } />
          <Route path="/settings" element={
                <section className={`${styles.catalog} ${styles[`theme2-${theme}`]}`}>
                  <SettingsPage/>
                </section>
              } />
          <Route path="/reader/:id" element={
                <section className={`${styles.catalog} ${styles[`theme2-${theme}`]}`}>
                  <BookReader/>
                </section>
              } />
          <Route path="*" element={
                <section className={`${styles.catalog} ${styles[`theme2-${theme}`]}`}>
                  <NotFound/>
                </section>
              } />
        </Routes>
        

        <section className={`${styles.footer} ${styles[`theme-${theme}`]}`}>
          <h2>All rights are reserved. </h2> 
        </section>
      </main>
      </Router>
      </TextSettingsProvider>
      </AppProvider>
  )
}

export default App
