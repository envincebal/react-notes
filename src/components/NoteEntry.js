import React, { Component } from 'react';

class NoteEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      editing: false,
      editTitle: this.props.title,
      editDetails: this.props.details
    }
    this.displayToggle = this.displayToggle.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }

  displayToggle() {
    this.setState(prevState => ({
      display: !prevState.display
    }))
  }

  edit() {
    this.setState({
      editing: true
    })
  }

  save() {
    let titleVal = this.refs.updateTitle.value;
    let detailsVal = this.refs.updateDetails.value;
    this.setState({
      editTitle: titleVal,
      editDetails: detailsVal,
      editing: false
    })
  }

  render() {
    return (
      <div className="entry">
        <div className="entry-header" onClick={this.state.editing ? null : this.displayToggle}>
          {this.state.editing ? (
            <input ref="updateTitle" className="edit-title" type="text" defaultValue={this.state.editTitle} />
          ) : (
              <h2 className="entry-title">{this.state.editTitle}</h2>
            )}
            {}
          <p className={"click-details " + (this.state.editing ? "hide-details" : null)}>{"(Click here to " + (this.state.display ? "hide" : "show") + " details)"}</p>
        </div>
        <hr />
        <div className={"entry-content " + (!this.state.display ? "hide-details" : null)}>
          {this.state.editing ? (
            <textarea ref="updateDetails" className="edit-details" cols="10" rows="2" defaultValue={this.state.editDetails}></textarea>
          ) : (
            <div>
              <h3 className="details-title">Details:</h3>
              <p className="details">{this.state.editDetails}</p>
            </div>
            )}
          <div className="entry-buttons">
            {this.state.editing ? (
              <button className="save" onClick={this.save}>Save</button>
            ) : (
                <button className="edit" onClick={this.edit}>Edit</button>
              )
            }
            <button className="delete" onClick={this.props.deleteNote}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default NoteEntry;
