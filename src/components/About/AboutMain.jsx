import React from 'react';

import AboutHeader from './AboutHeader';
import AboutTeam from './AboutTeam';
import AboutWork from './AboutWork';

const AboutMain = (props) => {
	return (
		<div className="about-main">
			<AboutHeader />

			<AboutTeam />

			<AboutWork />
		</div>
	);
};

export default AboutMain;
