import React, { PropTypes } from 'react';

import s from 'react-styleguidist/src/rsg-components/ReactComponent/ReactComponent.css';

const Renderer = ({ name, pathLine, description, propList, examples }) => {
	return (
		<div className={s.root}>
			<header className={s.header}>
				<h2 className={s.heading} id={name}>
					{name}
				</h2>
				<div className={s.pathLine}>{pathLine}</div>
			</header>
			<div>
				{description}
			</div>
			{propList}
			{examples}
		</div>
	);
};

Renderer.propTypes = {
	name: PropTypes.string.isRequired,
	pathLine: PropTypes.string.isRequired,
	description: PropTypes.object,
	propList: PropTypes.object,
	examples: PropTypes.array,
	sidebar: PropTypes.bool
};

export default Renderer;
