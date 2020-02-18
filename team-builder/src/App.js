import React from 'react'
import './App.css'

function App() {
	return (
		<div className='App'>
			<form>
				<label>
					Name: <input id='name' type='text'></input>
				</label>
				<label>
					Email: <input id='email' type='email'></input>
				</label>
				<label>
					Role: <input id='role' type='text'></input>
				</label>
				<input type='submit'></input>
			</form>
		</div>
	)
}

export default App
