import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
//import Checkbox from '@material-ui/core/Checkbox';
//import FormControlLabel from '@material-ui/core/FormControlLabel';

const Item = ({value, isDone}) => (<span className = {
		classnames ({
			[styles.item]: true,
			[styles.done]: isDone
		})
	}> {value}
		

	</span>);

export default Item;