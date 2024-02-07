import React, { useState } from 'react';

interface Task {
	id: number,
	name: string,
	status: boolean,
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
			status: false,
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
		tasks[id].status = true
		setTasks([...tasks])
		console.log(`Taks no ${id + 1} done`)
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
						<div className="taskcard" key={index} style={{display:"flex", flexDirection:"row", margin:".5em 0"}}>
							<p>{value.status ? (<s>{value.name}</s>) : value.name }</p>
							<button onClick={() => updateTask(value.id)} style={{margin:"0 1em"}}>Done</button>
							<button onClick={() => deleteTask(value.id)} style={{margin:"0 1em"}}>Delete</button>
							<p>Created at : {value.created_at.toISOString()}</p>
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