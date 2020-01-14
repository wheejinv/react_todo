import React, { Component } from "react";

class IterationSample extends Component {

	state = {
		names: ["눈사람", "얼음", "눈", "바람"],
		name: "",
	};

	handleChange = (e) => {
		this.setState({
			name: e.target.value,
		});
	};

	handleInsert = () => {
		this.setState({
			names: this.state.names.concat(this.state.name),
			name: "",
		});
	};

	handleRemove = (index) => {
		const {names} = this.state;

		// splice 이용하는 방법도 있고
		// names.splice(index, 1);

		if (index > -1) {
			this.setState({
				// names,
				names: names.filter((item, i) => {
					return i !== index;
				}),
			});
		}
	};

	render() {
		const nameList = this.state.names.map((name, index) => {
			return (
				<li
					key={index}
					onDoubleClick={() => {this.handleRemove(index);}}>
					{name}
				</li>
			);
		});

		return (
			<div>
				<input
					onChange={this.handleChange}
					value={this.state.name}/>
				<button onClick={this.handleInsert}>추가</button>
				<ul>
					{nameList}
				</ul>
			</div>
		);
	}
}

export default IterationSample;
