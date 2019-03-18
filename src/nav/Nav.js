import React, { Component } from 'react';
import './Nav.js';
import './Nav.css';
import Main from '../main/Main.js';

export default class Nav extends Component { //Решение табами, можно было через роут или с помощью библиотеки - react-tabs
	constructor(props, context) {
		super(props, context)
		this.state = {}
	  }
	  render() {
		return (
		  <Tabs 
			selectedTab={this.state.selectedTab}
			onChangeTab={selectedTab => this.setState({ selectedTab })}
		  >
			<Tab name="first" title="Мои организации">
			  <Main />
			</Tab>
			<Tab name="second" title="Заявки на изменения">
			  <p>Это мы не проходили</p>
			</Tab>
			<Tab name="third" title="Мои заказы">
			  <p>Это нам не задавали</p>
			  <i>Парам пам-пам</i>
			</Tab>
		  </Tabs>
		)
	  }
	}
	
	function Tabs({ children, selectedTab, onChangeTab }) {
	  let tabProps = []
	  const content = React.Children.map(children, (child) => {
		if (child.type === Tab) {
		  const { title, name } = child.props
		  tabProps.push({ title, name })
		  // By default show first tab if there is none selected
		  if (selectedTab ? (selectedTab !== child.props.name) : (tabProps.length !== 1)) {
			return null
		  }
		}
		return child
	  })
	
	  const finalSelectedTab = selectedTab || 
			(tabProps.length > 0 && tabProps[0].name)
	
	  return (
		<>
		  <Tablist
			selectedTab={finalSelectedTab}
			onChangeTab={onChangeTab}
			tabs={tabProps}
		  />
		  <>
			{content}
		  </>
		</>
	  )
	}
	
	function Tablist({ tabs, selectedTab, onChangeTab }) {
	  const linkClass = selected => {
		const c = "list-item" //Add default class 
		return selected ? `${c} ${c}--selected` : c //add --selected for css styles
	  }  
	  return (
		  <nav className="Navigation">
			<ul className="list container">
				{tabs.map(({ name, title }) => 
				<li className={linkClass(name === selectedTab)} aria-selected={name === selectedTab} role="tab" key={name}>
					<button
					className="nav-link"	
					onClick={() => onChangeTab(name)}
					>
					{title}
					</button>
				</li>
				)}
			</ul>
		  </nav>
	  )
	}
	
	function Tab({ name, children }) {
	  return (
		<div id={`content-${name}`} className="tab">
		  {children}
		</div>
	  )
	}