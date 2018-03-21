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

	}

	updateTitle(event){
		this.setState({title: event.target.value});
	}

	updateDetails(event){
		this.setState({details: event.target.value});
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
					prevent={(e) => e.preventDefault()}
				/>
				<div className="entry-section">
					{this.state.notes.map(() => <NoteEntry/> )}
				</div>
			</div>
		);
	}
}

export default App;
