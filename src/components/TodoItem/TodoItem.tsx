import React from 'react';
import styles from './todoItem.module.scss';
import Todo from '../../models/Todo';
const TodoItem: React.FC<{ todo: Todo; delTodo: (id: number) => void }> = ({
	todo,
	delTodo
}) => {
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		delTodo(todo.id);
	};
	return (
		<>
			<p>{todo.text}</p>
			<button className={styles.btn} onClick={clickHandler}>
				Delete
			</button>
		</>
	);
};

export default TodoItem;
