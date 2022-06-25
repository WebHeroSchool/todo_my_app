import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import { Octokit } from '@octokit/rest';
import Avatar from '@mui/material/Avatar';

const octokit = new Octokit();
class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],

	}

	componentDidMount() {
		octokit.repos.listForUser({
  			username: 'Stanislav20'
		})
		.then(({ data }) => (
			this.setState({
				repoList: data,
				isLoading: false,
				avatarUrl: data[0].owner.avatar_url,
				login: data[0].owner.login
			})
		))
	}

	render() {
		const { isLoading, repoList, avatarUrl, login } = this.state;
		return (
			<div className={styles.wrap}>
					<h2> Имя пользователя: {login}</h2>
					<Avatar className={styles.avatar}
						src= {repoList.username} 
						alt= "avatarUrl" 
						sx={{ width: 100, height: 100 }}
					/>
  				<h2 className={styles.title}>{ isLoading ? <CircularProgress /> : 'Список репозиториев' }</h2>
  				{!isLoading && <ol>
  						{repoList.map(repo => (<li className={styles.lilink} key={repo.id}>
  								<a className={styles.link} href={repo.html_url} target="_blank">{repo.name}</a>
  							</li>))}
  					</ol>}
  			</div>
		)
	}
}

export default About;