import React, { useState } from 'react';

enum Status {
	Complete,
	Incomplete
}

interface Task {
	id: number,
	name: string,
	status: Status,
	created_at: Date
}
let id = 0;

function App() {

	const [task, setTask] = useState('')
	const [tasks, setTasks] = useState<Array<Task>>([])

	const addTask = () => {
		const newTask: Task = {
			id: id,
			name: task,
			status: Status.Incomplete,
			created_at: new Date()
		}
		id++
		setTasks([...tasks, newTask])
	}

	const deleteTask = (id: number) => {
		console.log(`Update taks no ${id + 1}`)
		setTasks([...tasks.slice(0, id), ...tasks.slice(id + 1)])
	}

	const updateTask = (id: number) => {
		console.log(`Update taks no ${id + 1}`)
	}
	return (
		<div className="App">
			<div className="header">
				<h1>Todo List</h1>
			</div>
			<div className="input-area">
				<input type="text" placeholder='Input your task...' onChange={e => setTask(e.target.value)} />
				<button onClick={addTask} disabled={task === '' ? true : false}>Add</button>
			</div>

			<div className="task-area">
				{
					tasks.map((value, index) => (
						<div className="taskcard" key={index}>
							<input type="checkbox" checked={Status.Complete ? true : false} />
							<p>{value.name}</p>
							<button onClick={() => updateTask(value.id)}>Update</button>
							<button onClick={() => deleteTask(value.id)}>Delete</button>
						</div>
					))
				}
				{/* {JSON.stringify(tasks)} */}
			</div>
			

			<div className="footer">
				<p>Number of task : {tasks.length}</p>
			</div>
		</div>
	);
}

export default App;