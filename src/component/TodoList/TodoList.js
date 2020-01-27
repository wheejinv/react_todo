import React, { Component } from 'react';
import TodoItem from "../TodoItem";

class TodoList extends Component {
	render() {
		const {todos} = this.props;
		const todoItems = todos.map(
			todo => (
				<TodoItem
					key={todo.id}
					done={todo.done}>
					{todo.text}
				</TodoItem>
			),
		);

		return (
			<div>
				{todoItems}
			</div>
		);
	}
}

export default TodoList;
