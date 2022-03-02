import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItem}) => (<ul>
	{todoItem.map (items => <li key = {items.value}>)
		<Item value = {items.value} />
	</li>)}
</ul>);

export default ItemList;