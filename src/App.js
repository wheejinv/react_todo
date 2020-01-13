import React, { Component } from "react";
import "./App.css";
import EventPractice from "./component/EventPractice";
import ValidationSample from "./component/ValidationSample";
import ScrollBox from "./component/ScrollBox";

class App extends Component {
	render() {
		return (
			// <MyComponent name={"whee"}/>
			// <EventPractice />
			// <ValidationSample />
			<div>
				<ScrollBox ref={(ref) => this.scrollBox = ref}/>
				<button onClick={() => this.scrollBox.scrollToBottom()}>
					맨 밑으로
				</button>
			</div>
		);
	}
}

export default App;
