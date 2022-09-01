import { AddTodo, TodoItems } from './components';
import Todo from './models/Todo';
import './styles.scss';
import styles from './app.module.scss';
import { useState } from 'react';
const dumyTodos = [
	{ id: 1, content: 'Help Your Friend 💁' },
	{ id: 2, content: 'Play FOOTBALL ⚽' },
	{ id: 3, content: 'Upload Your Project Assignment 🕷' }
];

const App = () => {
	const [todos, setTodos] = useState(
		dumyTodos.map(({ id, content: text }) => new Todo(id, text))
	);
	const addTodo = (todoTxt: string) =>
		setTodos((prev) => [
			...prev,
			new Todo(new Date().getMilliseconds(), todoTxt)
		]);
	const delTodo = (id: number) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};
	return (
		<div className={styles.container}>
			<AddTodo addTodo={addTodo} />
			{todos.length > 0 && <TodoItems delTodo={delTodo} todos={todos} />}
			{!(todos.length > 0) && (
				<p className={styles.nothing}>Nothing To Show 🧭</p>
			)}
		</div>
	);
};
export default App;
