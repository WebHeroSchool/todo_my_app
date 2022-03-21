import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';

import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
 
const ItemList = ({todoItems, isDone, onClickDone}) => (<div>
	{todoItems.map(item => 
		  <ListItem key={item.value} className={styles.item}>
        	<ListItemIcon>
           		<Checkbox inputProps={{ 'aria-label': 'primary checkbox'}} 
                onClick= {() => console.log(item.isDone)} />
         	</ListItemIcon>
         	<ListItemText> 
         		<Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} />
         	</ListItemText>

			<IconButton aria-label="delete">
				<DeleteIcon />
			</IconButton>
  	</ListItem>)
  }
</div>);

export default ItemList;
