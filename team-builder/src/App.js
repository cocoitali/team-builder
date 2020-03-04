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
						id='name'
						placeholder='enter name'
						type='text'
						name='name'
						onChange={e => onChange(e)}
					></input>
				</label>
				<label>
					Email:
					<input
						id='email'
						placeholder='enter email'
						type='email'
						name='email'
						onChange={onChange}
					></input>
				</label>
				<label>
					Role:
					<input
						id='role'
						placeholder='what is your role?'
						type='text'
						name='role'
						onChange={onChange}
					></input>
				</label>
				<input type='submit'></input>
			</form>
		</div>
	)
}

export default App
