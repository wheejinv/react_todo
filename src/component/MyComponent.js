import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		name: "이름이름",
		age: 33,
	};

	static propTypes = {
		name: PropTypes.string,
	};

	// 책에서는 이 방식의 state 선언을 씀.
	state = {
		number: 0,
	};

	render() {
		return (
			<div>
				MyComponent, 나의 새롭고 멋진 컴포넌트<br/>
				<p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
				<p>저는 {this.props.age}살 입니다.</p>
				<p>숫자: {this.state.number}</p>
				<button onClick={() => {
					// setState 메서드가 하는 역할은 파라미터로 전달받은 필드를 업데이트한 후 컴포넌트가
					// 리렌더링하도록 트리거 한다.
					this.setState({
						number: this.state.number + 1,
					});
				}}>더하기
				</button>
			</div>
		);
	}
}

export default MyComponent;
