import React, { useState } from 'react'
import './App.css'

function App() {
	const [formValues, setFormValues] = useState({
		name: ' ',
		email: ' ',
		role: ' '
	})
	// const [name, setName] = useState('')
	// const [email, setEmail] = useState('')
	// const [role, setRole] = useState('role')

	const onChange = e => {
		setFormValues({
			...formValues,
			[e.targe.name]: e.target.value
		})
	}

	const onSubmit = e => {
		e.preventDefault()
		alert(
			`Thankyou for your submission, ${formValues.name}. We'll reach you at ${formValues.email} for future correspondence`
		)
	}
	return (
		<div className='App'>
			<form onSubmit = {onSubmit}>
				<label>
					Name:
					<input
						id='name'
						placeholder='enter name'
						type='text'
						onChange={onChange}
					></input>
				</label>
				<label>
					Email:
					<input
						id='email'
						placeholder='enter email'
						type='email'
						onChange={onChange}
					></input>
				</label>
				<label>
					Role:
					<input
						id='role'
						placeholder='what is your role?'
						type='text'
						onChange={onChange}
					></input>
				</label>
				<input type='submit'></input>
			</form>
		</div>
	)
}

export default App
