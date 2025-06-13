import styles from '/src/styles/Header.module.css'
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from '/src/components/ThemeSwitcher';
import { useNavigate, Link } from 'react-router-dom';

function Header() {
    const { theme } = useTheme();
    const navigate = useNavigate();
    return (
        <div className={`${styles.container} ${styles[`theme-${theme}`]}`}>
            <Link to="/" className={`${styles.name} ${styles[`theme-${theme}`]}`}>Книжный магазин</Link>
            <div>
                <input className={styles.input} type="text" placeholder='Поиск книг...' />
                <button className={styles.button}>Найти</button>
            </div>
            
            <div className={styles.themeSwitcher}>
                <button onClick={() => navigate('/settings')} className={styles.button}>Настройки</button>
            </div>

            <div>
                <ThemeSwitcher/>
            </div>
        </div>
    );
}
export default Header