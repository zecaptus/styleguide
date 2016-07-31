import React, { PropTypes } from 'react';
import classnames from 'classnames';
import s from 'react-styleguidist/src/rsg-components/Layout/Layout.css';
import cs from './CustomLayout.css';
import GithubLogo from './GitHub-Mark-Light-32px.png';

const Renderer = ({ title, component, toc, sidebar, fallback }) => (
	<div className={classnames(s.root, { [s.withoutSidebar]: !sidebar })}>
		<header className={cs.header}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 72" style={{width:24, height: 24, marginLeft:10}}>
				<path fill="#FFFFFF" d="M77.556,10.608c-0.229-0.491-0.708-0.816-1.249-0.849L53.565,8.432c-0.554-0.031-1.081,0.25-1.361,0.73
                        c-0.276,0.48-0.264,1.077,0.037,1.543c0.047,0.069,4.504,7.024,8.249,20.173c0.151,0.54,0.602,0.946,1.151,1.045
                        c0.108,0.021,0.22,0.027,0.328,0.023c0.437-0.02,0.851-0.232,1.12-0.592l14.312-19.247C77.727,11.675,77.787,11.098,77.556,10.608
                        z"></path>
				<path fill="#FFFFFF" d="M24.129,8.409L1.386,9.746c-0.54,0.032-1.018,0.358-1.248,0.849c-0.228,0.491-0.17,1.068,0.153,1.501
                        l14.322,19.241c0.269,0.361,0.685,0.575,1.124,0.593c0.106,0.004,0.218-0.005,0.325-0.022c0.551-0.104,0.998-0.507,1.151-1.046
                        c3.739-13.151,8.194-20.108,8.239-20.176c0.303-0.466,0.316-1.064,0.037-1.544C25.209,8.66,24.698,8.373,24.129,8.409z"></path>
				<path id="A_1_" fill="#FFFFFF" d="M38.894,0.001c-0.015,0-0.03,0.003-0.045,0.005C38.83,0.004,38.815,0.001,38.8,0.001
                        C26.537-0.322,7.245,67.446,15.505,71.382c8.123,3.867,13.479-12.798,23.295-13.136c0.011,0,0.02,0.002,0.028,0.004v0.002
                        c0.008-0.002,0.015-0.002,0.021-0.002c0.004,0,0.01,0,0.015,0.002V58.25c0.014-0.002,0.021-0.004,0.03-0.004
                        c9.818,0.338,15.175,17.001,23.296,13.136C70.45,67.444,51.16-0.323,38.894,0.001z"></path>
			</svg>
			<h1 className={s.heading}>
				<a href={'#'+ fallback}>

					{title}
				</a>
			</h1>
			<a href="https://github.com/Whataboon/ComponentsLibrary" className={cs.githubLink}>
				<img src={GithubLogo} />
			</a>
		</header>
		<main className={s.wrapper}>
			<div className={s.content}>
				<div className={s.components}>
					{component}
				</div>
			</div>
			<div className={classnames(s.sidebar,cs.sidebar)}>
				{toc}
			</div>
		</main>
		<footer className={classnames(s.footer, cs.footer)}>
			&copy; {new Date().getFullYear()} Whataboon, SAS. All Rights Reserved.
		</footer>
	</div>
);

Renderer.propTypes = {
	title: PropTypes.string.isRequired,
	component: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]).isRequired,
	toc: PropTypes.node.isRequired,
	sidebar: PropTypes.bool,
	fallback: PropTypes.string.isRequired
};

export default Renderer;
