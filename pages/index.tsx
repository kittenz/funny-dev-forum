import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from './HomePage.module.scss';

function HomePage() {
	return (
		<div className='page-container'>
			<Head>
				<title>Funny DevForum Archive</title>
				<meta name='description' content='An archive for funny/weird posts from devforum.roblox.com.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>Funny DevForum post archive</h1>

				<table className={styles.topicList}>
					<thead>
						<th>
							<b>Topic name</b>
						</th>
						<th>
							<b>Date</b>
						</th>
					</thead>
					<tbody>
						<tr>
							<td className={styles.trDevelopmentDiscussion}>
								<a>Anniversary Bobux</a>
							</td>
							<td>
								<p>May 24, 2021</p>
							</td>
						</tr>
						<tr>
							<td>
								<a>Anniversary Bobux</a>
							</td>
							<td>
								<p>May 24, 2021</p>
							</td>
						</tr>
					</tbody>
				</table>
			</main>

			<footer>
				<h4>Made by Kittenz</h4>
			</footer>
		</div>
	);
}

export default HomePage;
