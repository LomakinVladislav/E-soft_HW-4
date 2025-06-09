import styles from '/src/styles/Header.module.css'

function Header() {
    return (
        <div className={styles.container}>
            <h1 className={styles.name}>Книжный магазин</h1>
            <div>
                <input className={styles.input} type="text" placeholder='Поиск книг...' />
                <button className={styles.searchButton}>Найти</button>
            </div>

            <div>
                <button className={styles.settingsButton}>Настройки</button>
            </div>
        </div>
    );
}
export default Header