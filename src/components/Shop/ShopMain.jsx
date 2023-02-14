import React from 'react';

import ShopContent from './ShopContent';

const ShopMain = (props) => {
	return (
		<div className="shop">
			<div className="shop-header">
				<img
					className="shop-header__image"
					src="https://www.coxwellvet.com/wp-content/uploads/sites/29/2018/10/dog-food.jpg"
					alt=""
				/>
				<div className="shop-header__modal">
					<div className="shop-header__modal__content">
						<h2>SHOP</h2>
						<button>Home / Products</button>
					</div>
				</div>
			</div>
			<ShopContent />
		</div>
	);
};

export default ShopMain;
