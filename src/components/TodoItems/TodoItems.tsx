import React from 'react';
import Todo from '../../models/Todo';
import TodoItem from '../TodoItem/TodoItem';
import styles from './todoItems.module.scss';
const TodoItems: React.FC<{ todos: Todo[]; delTodo: (id: number) => void }> = ({
	todos,
	delTodo
}) => {
	return (
		<>
			<ul className={styles.ul}>
				{todos.map((todo) => (
					<li key={todo.id} className={styles.li}>
						<TodoItem delTodo={delTodo} todo={todo} />
					</li>
				))}
			</ul>
		</>
	);
};
export default TodoItems;
