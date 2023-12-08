import * as React from 'react';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import SimplicityPage from './components/SimplicityPage/SimplicityPage';
import VersatilityPage from './components/VersatilityPage/VersatilityPage';
import EngagementPage from './components/EngagementPage/EngagementPage';
import BusinessPage from './components/BusinessPage/BusinessPage';



export default function App() {

	return (
		<>
			<div>
				<Header />
				<HomePage />
				<EngagementPage />
				<SimplicityPage />
				<VersatilityPage />
				<BusinessPage />
			</div>
		</>
	)
}

