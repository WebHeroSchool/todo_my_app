import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = {
	taskOne: 'Пройти модуль React до конца',
	taskTwo: 'Составить резюме',
	taskThree: 'Устроиться разработчиком',
	taskFour: 'Кайфовать от того чем теперь занимаешься'
};

const App = () => (<div>
  <h1>Список дел:</h1>
  <InputItem />
  <ItemList todoItem = {todoItem} />
  <Footer count = {3}/>
</div>);

export default App;