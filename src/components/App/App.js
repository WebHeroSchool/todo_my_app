import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
	state = {
		todoItems: [
			{ value: 'Компоненты-классы',
		  	isDone: false,
			  id:1
			},
			{ value: 'State',
		  	isDone: false,
				id:2
			},
			{ value: 'Обработка событий',
			  isDone: false,
				id:3
			},
			{ value: 'Изменение состояния. SetState',
		  	isDone: false,
				id:4
			},
		],
		count: 4
	};

  onClickAdd = value => this.setState(state => ({
    todoItems: [
      ...state.todoItems,
      { 
        value,
        isDone: false,
        id: state.count + 1
      }
    ],
    count: state.count + 1
  }));

  onClickDone = id => {
    const newItemList = this.state.todoItems.map(item => {
      const newItem = {...item};
      if (item.id===id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({todoItems: newItemList});
  }
  
  onClickDelete = id => {
    const newItemList = this.state.todoItems.filter(item => item.id !==id)
    this.setState({todoItems: newItemList});
  }

  onClickFooter = () => this.setState(state => ({count: state.count -1}));

    render () {
		return (
			<div className={styles.wrap}>
  			<h1 className={styles.title}>Список уроков:</h1>
    		<InputItem 
          onClickAdd={this.onClickAdd} 
        />
    		<ItemList 
          todoItems = {this.state.todoItems} 
          onClickDone = {this.onClickDone} 
          onClickDelete={this.onClickDelete}
        />
    		<Footer 
          count = {this.state.count}  
          onClickFooter={this.onClickFooter}
        />
  		</div>);
	}
}

export default App;