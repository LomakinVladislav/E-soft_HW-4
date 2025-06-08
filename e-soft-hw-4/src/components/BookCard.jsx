import styles from '/src/styles/BookCard.module.css'


function BookCard() {
    return (
        <div className={styles.bookCard}>
            <div className={styles.container}>
                <div>
                    <img 
                        src="/public/book.png" 
                        alt="Обложка"  
                        width={170}
                    />
                </div>
                <h1>Название</h1>
                <div>
                    <h2>Автор</h2>
                    <h3>Год издания</h3>
                </div>
            </div>
            <button className={styles.favouriteButton}>
                <img 
                    src="/public/icon-favourites_black.png" 
                    alt="В избранное" 
                    width={30}
                />
            </button>
        </div>
    );
}

export default BookCard