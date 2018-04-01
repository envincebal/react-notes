import React, { Component } from 'react';
import NoteEntry from "./components/NoteEntry";
import NoteForm from "./components/NoteForm";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			title: "",
			details: ""
		}
		this.updateTitle = this.updateTitle.bind(this);
		this.updateDetails = this.updateDetails.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
		this.deleteHandler = this.deleteHandler.bind(this);

	}

	updateTitle(event) {
		this.setState({ title: event.target.value });
	}

	updateDetails(event) {
		this.setState({ details: event.target.value });
	}

	submitHandler(e) {
		e.preventDefault();
		if (!this.state.title.length || !this.state.details.length) {
			return;
		}

		const newNote = {
			newTitle: this.state.title,
			newDetails: this.state.details
		}
		this.setState(prevState => ({
			notes: prevState.notes.concat(newNote),
			title: "",
			details: ""
		}))
	}

	deleteHandler(id) {
		this.setState(prevState => ({
			notes: prevState.notes.filter((el) => el !== id)
		}))
	}

	render() {
		return (
			<div className="container">
				<h1 className="title">React Notes App</h1>
				<NoteForm
					titleValue={this.state.title}
					detailsValue={this.state.details}
					titleHandle={this.updateTitle}
					detailsHandle={this.updateDetails}
					onSubmit={this.submitHandler}
				/>
				<div className="entry-section">
					{this.state.notes.map((note, i) => (
						<NoteEntry
							key={note.newTitle}
							title={note.newTitle}
							details={note.newDetails}
							deleteNote={this.deleteHandler.bind(this, note)}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;