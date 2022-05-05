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

  onClickAdd = value => {
  	if(value !== '') {
      this.setState(state => ({
 	      todoItems: [
          ...state.todoItems,
          {
            value,
            isDone: false,
            id: state.count + 1
          }
 	      ],
        count: state.count + 1,
        error: false
      }));
    } else {
      this.setState(state => ({error: true}))
    }
  };
	 
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

    render () {

		return (

			<div className={styles.wrap}>
  			<h1 className={styles.title}>Список уроков:</h1>
    		<InputItem
       		onClickAdd={this.onClickAdd}
    			error={this.state.error}
        />
    		<ItemList
          todoItems = {this.state.todoItems}
          onClickDone = {this.onClickDone}
          onClickDelete={this.onClickDelete}
        />
    		<Footer />
  		</div>);
	}
}

export default App;