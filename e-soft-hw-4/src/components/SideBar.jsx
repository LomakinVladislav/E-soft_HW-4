import styles from '/src/styles/SideBar.module.css'
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';



const authors = [
  {category: "Historic", name: "Л. Н. Толстой", stocked: false},
  {category: "Historic", name: "Э. М. Ремарк", stocked: false},
  {category: "Fantasy", name: "Д. К. Роулинг", stocked: true},
  {category: "Detective", name: "П. В. Зюскинд", stocked: true},
]

function AuthorCategoryRow({ category }) {
  return (
    <tr className={styles.authorItem}>
      <th>
        {category}
      </th>
    </tr>
  )
}

function AuthorRow({ author }) {
  const name = author.stocked ? author.name :
    <span style={{color: 'red'}}>
      {author.name}
    </span>

  return (
    <tr className={styles.authorItem}> 
      <td>{name}</td>
    </tr>
  )
}

function SearchBar({ filterText, isStockedOnly, onFilterTextChange, onIsStockedOnly}) {
  return (
    <form className={styles.authorSearch}>
      <input 
        type="text" 
        value={filterText} 
        placeholder="Поиск..."
        onChange={(e) => onFilterTextChange(e.target.value)}/>
      <label>
        <input 
          type="checkbox" 
          checked={isStockedOnly} 
          onChange={(e) => onIsStockedOnly(e.target.checked)}/>
        {' '}
        Показывать только авторов в наличии
      </label>
    </form>
  )
}

function AuthorsTable({ authors, filterText, isStockedOnly }) {
  const rows = [];
  let lastCategory = null;

  authors.forEach((author) => {
    if (
      author.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (isStockedOnly && !author.stocked) {
      return;
    }
    if (author.category !== lastCategory) {
      rows.push(
        <AuthorCategoryRow 
          category={author.category}
          key={author.category} />
      );
    }
    rows.push(
      <AuthorRow
        author={author}
        key={author.name} />
    );  
    lastCategory = author.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Автор</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function FilterableAuthorsTable({ authors }) {
  const [filterText, setFilterText] = useState('');
  const [isStockedOnly, setIsStockedOnly] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`${styles.filterPanel} ${styles[`theme-${theme}`]}`}>
      <SearchBar filterText={filterText} isStockedOnly={isStockedOnly} onFilterTextChange={setFilterText}
        onIsStockedOnly={setIsStockedOnly} />
      <AuthorsTable authors={authors} filterText={filterText} isStockedOnly={isStockedOnly}/>
    </div>
  )
}

export default function SideBar() {
  return <FilterableAuthorsTable authors = {authors}/>
}

