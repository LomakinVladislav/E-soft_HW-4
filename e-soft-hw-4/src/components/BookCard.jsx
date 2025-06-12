import styles from '/src/styles/BookCard.module.css'
import { useTheme } from '../context/ThemeContext';

function BookCard() {
    const { theme } = useTheme();
    return (
        <div className={`${styles.bookCard} ${styles[`theme-${theme}`]}`}>
            <img 
                src="/public/book.png" 
                alt="Обложка книги"  
                className={styles.bookCover}
            />
            <h2 className={`${styles.bookTitle} ${styles[`theme-${theme}`]}`}>Название книги</h2>

            <p className={`${styles.bookAuthor} ${styles[`theme-${theme}`]}`}>Автор книги</p>
            <button className={styles.bookButton}>Добавить в корзину</button>
        </div>
    );
}
export default BookCard