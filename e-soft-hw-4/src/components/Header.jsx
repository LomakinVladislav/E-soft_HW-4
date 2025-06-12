import styles from '/src/styles/Header.module.css'
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from '/src/components/ThemeSwitcher';

function Header() {
    const { theme } = useTheme();
    return (
        <div className={`${styles.container} ${styles[`theme-${theme}`]}`}>
            <h1 className={styles.name}>Книжный магазин</h1>
            <div>
                <input className={styles.input} type="text" placeholder='Поиск книг...' />
                <button className={styles.button}>Найти</button>
            </div>
            
            <div className={styles.themeSwitcher}>
                <button className={styles.button}>Настройки</button>
            </div>

            <div>
                <ThemeSwitcher/>
            </div>
        </div>
    );
}
export default Header