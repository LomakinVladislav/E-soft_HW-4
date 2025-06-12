import BookCard from '/src/components/BookCard'
import styles from '/src/styles/PageWrapper.module.css'
import { useTheme } from '../context/ThemeContext';

function PageWrapper() {
    const { theme } = useTheme();
    return (
            <section className={`${styles.container} ${styles[`theme-${theme}`]}`}>
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