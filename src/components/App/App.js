import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
	state = {
		todoItems: [
			{ value: 'Компоненты-классы',
		  	isDone: true},
			{ value: 'State',
		  	isDone: true},
			{ value: 'Обработка событий',
			  isDone: false},
			{ value: 'Изменение состояния. SetState',
		  	isDone: false},
			{ value: 'Передача данных и методов между компонентами',
		  	isDone: false},
			{ value: 'Добавление элемента. Работа с формами',
		  	isDone: false},
			{ value: 'defaultProps',
			  isDone: false},
			{ value: 'prop-types',
		  	isDone: false}
		]
	};

  onClickDone = isDone =>
    console.log(isDone);

    render () {
		return (
			<div className={styles.wrap}>
  			<h1 className={styles.title}>Список уроков:</h1>
    		<InputItem />
    		<ItemList todoItems = {this.state.todoItems} onClickDone = {this.onClickDone} />
    		<Footer count = {13}/>
  		</div>);
	}
}

export default App;