import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const ItemList = ({todoItem}) => (<ul className={styles.item}> 
	{todoItem.map (item => <li key = {item.value}>
		<Checkbox inputProps={{
	 'aria-label': 'uncontrolled-checkbox' 
	}} />
		<Item value = {item.value} isDone = {item.isDone} />
		
	</li>)}



</ul>);

export default ItemList;
