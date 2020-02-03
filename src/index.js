import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import * as serviceWorker from './serviceWorker';
// import App from "./component/App";
import App from "./reduxCount/containers/App"

// 리덕스 관련 불러오기
import { createStore } from 'redux';
import reducers from './reduxCount/reducers';

// react-redux 라이브러리에 내장된 리액트 애플리케이션에 손쉽게 스토어를 연동할 수 있도록 도와주는 컴포넌
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
