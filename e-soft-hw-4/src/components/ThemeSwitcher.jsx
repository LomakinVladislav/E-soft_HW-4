import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.button} ${styles[`theme-${theme}`]}`}
    >
      Переключить на {theme === 'light' ? 'тёмную' : 'светлую'} тему
    </button>
  );
};

export default ThemeSwitcher;