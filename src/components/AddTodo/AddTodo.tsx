import React, { useState } from 'react';
import styles from './addTodo.module.scss';

const AddTodo: React.FC<{ addTodo: (text: string) => void }> = ({
	addTodo
}) => {
	const [todoTxt, setTodoTxt] = useState<string>('');
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		addTodo(todoTxt);
		setTodoTxt('');
	};
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTodoTxt((prev) => e.target.value);
	};
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<label>Text Todo</label>
			<input type="text" value={todoTxt} onChange={changeHandler} />
			<button>Add Todo</button>
		</form>
	);
};
export default AddTodo;
