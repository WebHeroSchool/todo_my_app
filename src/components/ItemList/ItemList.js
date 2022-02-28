import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItem}) => (<ul>
  <li><Item todoItem = {todoItem.taskOne} /></li>
  <li><Item todoItem = {todoItem.taskTwo} /></li>
  <li><Item todoItem = {todoItem.taskThree} /></li>
  <li><Item todoItem = {todoItem.taskFour} /></li>
</ul>);

export default ItemList;