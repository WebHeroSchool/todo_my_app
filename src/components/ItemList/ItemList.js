import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItem}) => (<ul>
	{todoItem.map (item => <li key = {item.value}>
		<Item value = {item.value} isDone = {item.isDone} />
	</li>)}
</ul>);

export default ItemList;
