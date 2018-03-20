import React, { Component } from 'react';
import NoteEntry from "./components/NoteEntry";
import NoteForm from "./components/NoteForm";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: []
		}
	}

	render() {
		return (
			<div className="container">
				<h1 className="title">Timestamped Notes App</h1>
				<NoteForm />

			</div>
		);
	}
}

export default App;
