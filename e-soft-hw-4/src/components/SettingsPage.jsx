import BookCard from './BookCard'
import styles from '/src/styles/SettingsPage.module.css'

import { useContext } from 'react';
import { themes } from "../styles/theme"
import { ThemeContext } from "../context/ThemeContext"

import { useTextSettings, useTextStyles } from '../context/TextSettingsContext';

import { useAppContext } from '../context/AppContext';


function SettingsPage(){
    const { theme, toggleTheme } = useContext(ThemeContext);
    const currentTheme = themes[theme];

    const { deleteFavorite } = useAppContext();

    const { textSettings, updateTextSettings } = useTextSettings();
    const handleColorChange = (e) => {
        updateTextSettings({ color: e.target.id });
    };
    const handleSizeChange = (e) => {
        updateTextSettings({ size: e.target.id });
    };

    const handleBoldChange = (e) => {
        updateTextSettings({ bold: e.target.checked });
    };

     const handleDeleteFavorites = () => {
        if (window.confirm('Вы уверены, что хотите удалить все избранные книги?')) {
            deleteFavorite();
        }
    };

    const  textStyles = useTextStyles();

    return (
            <div className={styles.container} style={{...currentTheme}}>
                <h1>Настройки</h1>
                <div className={styles.chapters}>
                    <div className={styles.chapter}>
                        <h2>Тема:</h2>
                        <button onClick={toggleTheme} style={{border: currentTheme.border}} className='button_general'>Сменить тему{theme === 'light' ? '☀️' : '🌙'}</button>
                        <div>
                            <BookCard/>
                        </div>
                    </div>

                    <div className={styles.chapter}>
                        <h2>Управление данными:</h2>
                        <button style={{border: currentTheme.border}} className='button_general' onClick={handleDeleteFavorites}>Сбросить все избранное</button>
                    </div>

                    <div className={styles.chapter}>    
                        <h2>Настройки текста:</h2>
                        <div>
                            <h3>Цвет текста:</h3>
                                <label for="color_black">Черный</label>
                                <input type="radio" name="font_color" id="black" checked={textSettings.color === 'black'} onChange={handleColorChange}/>
                                <label for="color_darkblue">Белый</label>
                                <input type="radio" name="font_color" id="white" checked={textSettings.color === 'white'} onChange={handleColorChange}/>
                                <label for="color_sepia">Сепия</label>
                                <input type="radio" name="font_color" id="#704214" checked={textSettings.color === '#704214'} onChange={handleColorChange}/>
                        </div>

                        <div>
                            <h3>Размер шрифта:</h3>
                            <label for="small">Мелкий</label>
                            <input type="radio" name="font_size" id="small" checked={textSettings.size === 'small'} onChange={handleSizeChange}/>
                            <label for="medium">Средний</label>
                            <input type="radio" name="font_size" id="medium" checked={textSettings.size === 'medium'} onChange={handleSizeChange}/>
                            <label for="large">Большой</label>
                            <input type="radio" name="font_size" id="large" checked={textSettings.size === 'large'} onChange={handleSizeChange}/>
                        </div>

                        <div>
                            <label for="bold">Жирный шрифт</label>
                            <input type="checkbox" id="bold" checked={textSettings.bold} onChange={handleBoldChange}/>
                        </div>

                    <div className={styles.text_example} style={{background: currentTheme.background_reader}}> 
                        <p style={textStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque, enim id mollis lacinia, lorem turpis condimentum lorem, vel auctor tortor odio quis dui. Vivamus maximus metus ac orci luctus ornare pulvinar ut nisi. Ut et odio elit. Nam nec erat ac dui tempor congue. Nam a convallis arcu, a consequat nunc. Integer lorem elit, porta non ex sed, suscipit fringilla nunc. Etiam molestie ac dui id lobortis. Sed blandit faucibus facilisis. Ut non ante sodales, mollis risus sed, gravida dui.</p>
                    </div>
                    </div>
                </div>
                
            </div>
    )

}

export default SettingsPage