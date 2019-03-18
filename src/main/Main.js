import React, { Component } from 'react';
import './Main.js';
import './Main.css';
import Card from './card/Card.js';

class Main extends Component {
	render() {
		return (
		<>
			<main className="main container">
				<div className="title">
					<h1>Кафе Гладиатор</h1>
					<div className="map-link">
						<a href="https://clck.ru/FMdKA" className="maps-logo" />
						<a className="link-default" href="https://clck.ru/FMdKA">Страница на картах</a>
					</div>
				</div>
				
				<ul className="agency-about">
					<li>Информация</li>
					<li>Услуги</li>
					<li>Фото</li>
					<li>Отзывы</li>
					<li>Статистика</li>
				</ul>
				<h2>12 отзывов об организации</h2>

				<>
					<Card name="Василий Привалов" review="оригинальный отзыв..." rate="2" />
					<Card name="Илья Пряников" review="оригинальный отзыв..." rate="3" />
					<Card name="Лидия Никарагуа" review="оригинальный отзыв..." rate="5" />
				</>
			</main>
		</>
		);
	}
}

export default Main;