import BookCard from '/src/components/BookCard'
import styles from '/src/styles/PageWrapper.module.css'

function PageWrapper() {
    return (
            <section className={styles.container}>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </section>
    );
}
export default PageWrapper;