import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styles from './Footer.module.css';

const Footer = ({count}) => (<div className={styles.footer}>
	<p className={styles.footer__count}>Осталось уроков: {count}</p>
	
	<div className={styles.footer__filters}>
    	<ButtonGroup variant="outlined" aria-label="outlined primary button group">
    		<Button>One</Button>
        	<Button>Two</Button>
        	<Button>Three</Button>
    	</ButtonGroup>
	</div>
	

);




export default Footer;