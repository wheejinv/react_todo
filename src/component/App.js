import React, { Component } from "react";
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {

	state = {
		input: '', // input 값
		// 일정 데이터 초깃값
		todos: [
			{id: 0, text: "리액트 공부하기", done: true},
			{id: 1, text: "컴포넌트 스타일링 해보기", done: false},
		],
	};

	// 일정 데이터 안에 들어가는 값
	id = 1;
	getId = () => {
		return ++this.id;
	};

	handleChange = (e) => {
		const {value} = e.target;
		this.setState({
			input: value,
		});
	};

	handleInsert = () => {
		const { todos, input} = this.state;
		const newTodo = {
			id: this.getId(),
			text: input,
			done: false,
		};

		this.setState({
			todos: [...todos, newTodo],
			input: '',
		})
	};

	handleToggle = (id) => {
		// id로 배열의 인덱스를 찾는다.
		const {todos} = this.state;
		const index = todos.findIndex(todo => todo.id === id);

		// 찾은 데이터의 done 값을 반전시킵니다.
		if (index !== -1) {
			todos[index].done = !todos[index].done;
		}

		this.setState({
			todos,
		});
	};

	render() {
		const {input, todos} = this.state;
		const {handleChange, handleInsert, handleToggle} = this;

		return (
			<PageTemplate>
				<TodoInput onChange={handleChange} value={input} onInsert={handleInsert}/>
				<TodoList todos={todos} onToggle={handleToggle}/>
			</PageTemplate>
		);
	}
}

export default App;
