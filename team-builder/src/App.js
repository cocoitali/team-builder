import React, { useState } from 'react'
import './App.css'

function App() {
	const [formValues, setFormValues] = useState({
		name: ' ',
		email: ' ',
		role: ' '
	})

	const onChange = e => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = e => {
		e.preventDefault()
		setFormValues({name: '', email: '', role: ''})
		alert(
			`Thankyou for your submission, ${formValues.name}. We'll reach you at ${formValues.email} for future correspondence`
		)
	}
	return (
		<div className='App'>
			<form onSubmit={e => onSubmit(e)}>
				<label>
					Name:
					<input
						value={formValues.name}
						type='text'
						name='name'
						onChange={e => onChange(e)}
					></input>
				</label>
				<label>
					Email:
					<input
						type='email'
						name='email'
						value={formValues.email}
						onChange={e => onChange(e)}
					></input>
				</label>
				<label>
					Role:
					<input
						value={formValues.role}
						type='text'
						name='role'
						onChange={e => onChange(e)}
					></input>
				</label>
				<button >Submit</button>
			</form>
		</div>
	)
}

export default App
