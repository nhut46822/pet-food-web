import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Shop from '../../pages/Shop';
import News from '../../pages/News';
import Contact from '../../pages/Contact';
import Cart from '../../pages/Cart';

const Layout = (props) => {
	return (
		<div>
			<Header />
			<Routes></Routes>
			<div className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/news" element={<News />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>

			<Footer />
		</div>
	);
};

export default Layout;
