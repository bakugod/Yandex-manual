import React, { Component } from 'react';
import './Header.js';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<header className="Header">
				<div className="aside-container">
					<div className="header-logo-placeholder">
					<a className="yandex-logo" href="https://yandex.ru/" alt="Яндекс" />
					<a className="yandex-logo-manual" href="http://localhost:3000/" alt="Справочник" />
				</div>
				<div className="header-search">
						<input className="input" placeholder="Название, телефон, сайт" />
						<input className="header-button" type="submit" value="Найти" />
				</div>
				</div>
				<div className="header-right-container">
					<img src="https://clck.ru/FNJeK" width="32px" height="32px" alt="Почта" />
				</div>
			</header>
		);
	}
}

export default Header;