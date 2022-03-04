import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
	const todoItem = [
		{ value: 'Пройти модуль React до конца'},
		{ value: 'Составить резюме'},
		{ value: 'Устроиться разработчиком'},
		{ value: 'Кайфовать от того чем теперь занимаешься'}
	];

	return (
	<div className={styles.wrap}>
  	<h1 className={styles.title}>Список дел:</h1>
    <InputItem />
    <ItemList todoItem = {todoItem} />
    <Footer count = {3}/>
  </div>);
}
	
export default App;