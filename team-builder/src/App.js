import React, { useState } from 'react'
import './App.css'

function App() {
	const [formValues, setFormValues] = useState({ name: ' ', email: ' ', role: ' '  })
	// const [name, setName] = useState('')
	// const [email, setEmail] = useState('')
	// const [role, setRole] = useState('role')

	const onChange = e => {
		setFormValues({
			...formValues,
			[e.targe.name]: e.target.value
		})
	}
	return (
		<div className='App'>
			<form onChange={onChange}>
				<label>
					Name:
					<input id='name' placeholder= 'enter name'type='text'></input>
				</label>
				<label>
					Email:
					<input id='email' placeholder= 'enter email' type='email'></input>
				</label>
				<label>
					Role:
					<input id='role' placeholder= 'what is your role?' type='text'></input>
				</label>
				<input type='submit'></input>
			</form>
		</div>
	)
}

export default App
