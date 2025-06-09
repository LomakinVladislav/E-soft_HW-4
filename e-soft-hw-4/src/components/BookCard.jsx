import styles from '/src/styles/BookCard.module.css'

function BookCard() {
    return (
        <div className={styles.bookCard}>
            <img 
                src="/public/book.png" 
                alt="Обложка книги"  
                className={styles.bookCover}
            />
            <h2 className={styles.bookTitle}>Название книги</h2>

            <p className={styles.bookAuthor}>Автор книги</p>
            <button className={styles.bookButton}>Добавить в корзину</button>
        </div>
    );
}
export default BookCard