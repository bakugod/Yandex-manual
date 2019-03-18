import React, { PureComponent } from 'react';
import './Card.js';
import './Card.css';

export default class Card extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {showComment: false}
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(prevState => ({
			showComment: !prevState.showComment
		}));
	}

	render() {
		return (
			<>
				<section className="review-card">
					<div className="inspector">
						<img src="https://clck.ru/FNJeK" width="36px" height="36px" alt="Пользователь"/>
						<span className="inspector__user-name">
							<strong> {this.props.name}</strong>
						</span>
					</div>
					<div className="rating">
						<span className={starClass(true)}></span>
						<span className={starClass(true)}></span>
						<span className={starClass(true)}></span>
						<span className={starClass(true)}></span>
						<span className={starClass(true)}></span>
					</div>
					<article className="review-card__view">
						<span className="review-card__body">
							{this.props.review}
						</span>
						<span className="review-all">ещё</span>
					</article>
					<div className="reaction">
						<button className="reaction-button" onClick={this.handleToggleClick}>
          					{this.state.showComment ? "Скрыть"  : "Ответить"}
						</button>
						<button className="reaction-button">Пожаловаться</button>
						<button className="reaction-button--link">Ссылка на отзыв</button>	
					</div>
					<ShowComment warn={this.state.showComment}>	</ShowComment>
					
				</section>
			</>
		);
	}
}

function ShowComment(props) {
	if (!props.warn) {
	  return null
	}
  
	return (
	<section className="reply">
		<textarea placeholder="Напишите ответ на отзыв"></textarea>
	</section>
	);
}





const starClass = selected => {
	const c = "star" //Add default class 
	return selected ? c : `${c} ${c}--empty` //add --selected for css styles
}