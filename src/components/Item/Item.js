import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (
	<ListItem
	  className = {styles.item}>
      <ListItemIcon>
     		<Checkbox
          inputProps={{ 'aria-label': 'primary checkbox'}}
          onClick= {() => onClickDone(id)}
        />
     	</ListItemIcon>
     	<ListItemText primary={value} className = {
				classnames ({
					[styles.item]: true,
					[styles.done]: isDone
				})
			}>
      </ListItemText>
			<IconButton aria-label="delete"
        onClick={() => onClickDelete(id)}>
			<DeleteIcon  />
			</IconButton>
  	</ListItem>
);

Item.defaultProps = {
	isDone: false,
	id:0
}

Item.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
  isDone: PropTypes.bool,
  id: PropTypes.number
}

export default Item;