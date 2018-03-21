import React from 'react';

const NoteForm = (props) => {
  return (
    <div>
      <form className="form-section">
        <input className="title-input" type="text" autoFocus placeholder="Title" /><br/>
        <textarea className="details-input" cols="20" rows="3" placeholder="Details" ></textarea><br/>
        <button className="input-button">Add Note</button>
      </form>
    </div>
  )
}

export default NoteForm;