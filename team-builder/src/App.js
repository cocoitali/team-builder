import React from 'react'
import './App.css'

function App() {
	return (
		<div className='App'>
			<form>
				<label>
					Name: <input type='text'></input>
				</label>
				<label>
					Email: <input type='email'></input>
				</label>
				<label>
					Role: <input type='text'></input>
				</label>
        <input type='submit'></input>
			</form>
		</div>
	)
}

export default App
