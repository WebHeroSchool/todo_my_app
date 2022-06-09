import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
  const initialState = {
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
    count: 4,
    error: false
  };

  const [todoItems, setTodoItems] = useState(initialState.todoItems);
	const [count, setCount] = useState(initialState.count);
  const [error, setError] = useState(initialState.error);

  useEffect(() => {
    console.log('componentDidMount')
  }, []);

  useEffect(() => {
    console.log('componentDidUpdete')
  });

  const onClickAdd = (value) => {
  	if(value !== '') {
      let newItemList = [
        ...todoItems,
        {
          value,
          isDone: false,
          id: count + 1
        }
 	    ];
      setTodoItems(newItemList)
      setCount(count + 1)
      setError(false)
    } else {
      setError(true)
    }
  };
	 
  const onClickDone = (id) => {
    const newItemList = todoItems.map(item => {
      const newItem = {...item};
      if (item.id===id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setTodoItems(newItemList);
  }

  const onClickDelete = (id) => {
    const newItemList = todoItems.filter(item => item.id !==id)
    setTodoItems(newItemList);
  }

		return (
			<div className={styles.wrap}>
  			<h1 className={styles.title}>Список уроков:</h1>
    		<InputItem
       		onClickAdd={onClickAdd}
    			error={error}
        />
    		<ItemList
          todoItems = {todoItems}
          onClickDone = {onClickDone}
          onClickDelete={onClickDelete}
        />
    		<Footer count={count} />
  		</div>);
}

export default Todo;