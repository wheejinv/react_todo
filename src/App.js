import React, { Component } from "react";
import classNames from 'classnames/bind';
import styles from "./App.module.css";

const cx = classNames.bind(styles);

class App extends Component {
	render() {
		const isBlue = Math.random() > 0.5;

		return (
			<div className={cx('box', {
				blue: isBlue,
			})}>

			</div>
		);
	}
}

export default App;
