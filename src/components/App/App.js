import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
	state = {
		todoItem: [
			{ value: 'Подключение стилей',
		  	isDone: true},
			{ value: 'CSS Modules',
		  	isDone: true},
			{ value: 'classnames',
		  	isDone: true},
			{ value: 'Готовые библиотеки компонентов',
			  isDone: true},
			{ value: 'Стилизация приложения',
		  	isDone: true},
			{ value: 'Компоненты-классы',
		  	isDone: true},
			{ value: 'State',
		  	isDone: true},
			{ value: 'Обработка событий',
			  isDone: false}
		]
	};
    render () {
		return (
			<div className={styles.wrap}>
  			<h1 className={styles.title}>Список уроков:</h1>
    		<InputItem />
    		<ItemList todoItem = {this.state.todoItem} />
    		<Footer count = {14}/>
  		</div>);
	}
}

export default App;