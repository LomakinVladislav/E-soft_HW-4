import styles from '/src/styles/SideBar.module.css'

function SideBar() {
    return (
        <div className={styles.filterPanel}>
  <h3>Фильтр по авторам</h3>
  
  <input type="text" 
         placeholder="Найти автора..." 
         className={styles.authorSearch}/>
  
  <div className={styles.authorList}>
    <label className={styles.authorItem}>
      <input type="checkbox" name="author" value="dostoevsky"/>
      Фёдор Достоевский
    </label>
    
    <label className={styles.authorItem}>
      <input type="checkbox" name="author" value="tolstoy"/>
      Лев Толстой
    </label>
    
    <label className={styles.authorItem}>
      <input type="checkbox" name="author" value="pushkin"/>
      Александр Пушкин
    </label>
    
    <label className={styles.authorItem}>
      <input type="checkbox" name="author" value="gogol"/>
      Николай Гоголь
    </label>
  </div>
  
  <div className={styles.filterActions}>
    <button className={styles.applyBtn}>Применить</button>
    <button className={styles.resetBtn}>Сбросить</button>
  </div>
</div>
    );
}
export default SideBar