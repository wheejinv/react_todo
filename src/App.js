import React, { Component } from "react";
import classNames from 'classnames'
import styles from "./App.module.css";

class App extends Component {
	render() {
		return (
			// 클래스가 여러개 일 때 사용하는 방법
			// <div className={[styles.box, styles.blue].join(' ')}>
			// classNames 라이브러리를 이용하는 방
			<div className={classNames(styles.box, styles.blue)}>

			</div>
		);
	}
}

export default App;
