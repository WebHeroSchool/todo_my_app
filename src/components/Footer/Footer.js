import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styles from './Footer.module.css';

const buttons = [
  <Button key="all">Все</Button>,
  <Button key="active">Активные</Button>,
  <Button key="completed">Завершенные</Button>
];

const Footer = ({count}) => (<footer className={styles.footer}>
	<div className={styles.count}  >Осталось уроков: {count}</div>
	<div className={styles.filters}>
		<ButtonGroup size="small" aria-label="small button group">
			{buttons}
		</ButtonGroup>
	</div>
</footer>);

Footer.defaultProps = {
	count: 0
}

export default Footer;