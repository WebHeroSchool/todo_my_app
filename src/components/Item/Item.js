import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './Item.module.css';


class Item extends React.Component {
	componentDidMount() {
		console.log('componentDidMount')
	}

	componentDidUpdate() {
		console.log('componentDidUpdate')
	}

	componentWillUnmounting() {
		console.log('componentWillUnmounting')
	}

	render() {
		const { value, isDone, onClickDone, id, onClickDelete } = this.props;

		return (
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
  	</ListItem>);
	}
}

Item.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
  isDone: PropTypes.bool,
  id: PropTypes.number
  onClickDone: PropTypes.func,
  id: PropTypes.number,
  onClickDelete: PropTypes.func
}

export default Item;