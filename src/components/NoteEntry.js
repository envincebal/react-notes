import React, { Component } from 'react';

class NoteEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
    this.displayToggle = this.displayToggle.bind(this);
  }

  displayToggle() {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    return (
      <div className="entry">
        <div className="entry-header" onClick={this.displayToggle}>
          <h2 className="entry-title">{this.props.title}</h2>
          <p className="click-details">{"(Click to " + (!this.state.display ? "show details)" : "hide details)")}</p>
        </div>
        <hr />
        <div className={"entry-content " + (!this.state.display ? "hide-details" : null)}>
          <p className="details">{this.props.details}</p>

          <div className="entry-buttons">
            <button className="delete" onClick={this.props.deleteNote}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default NoteEntry;
