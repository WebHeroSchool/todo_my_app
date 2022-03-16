import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
	const todoItem = [
		{ value: 'Подключение стилей',
		  isDone: true},
		{ value: 'CSS Modules',
		  isDone: true},
		{ value: 'classnames',
		  isDone: true},
		{ value: 'Готовые библиотеки компонентов',
			isDone: true},
		{ value: 'Стилизация приложения',
		  isDone: false},
		{ value: 'Компоненты-классы',
		  isDone: false},
		{ value: 'State',
		  isDone: false},
		{ value: 'Обработка событий',
			isDone: false}
	];

	return (
	<div className={styles.wrap}>
  	<h1 className={styles.title}>Список уроков:</h1>
    	<InputItem />
    <ItemList todoItem = {todoItem} />
    <Footer count = {16}/>
  </div>);
}
	
export default App;