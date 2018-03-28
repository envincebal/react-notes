import React from 'react';

const NoteForm = (props) => {
  return (
    <div>
      <form className="form-section">
        <input
          className="title-input"
          type="type"
          placeholder="Title"
          value={props.titleValue}
          onChange={props.titleHandle}
        />
        <br />
        <textarea
          className="details-input"
          cols="20"
          rows="3"
          placeholder="Details"
          value={props.detailsValue}
          onChange={props.detailsHandle}
          />
        <br />
        <button
          className="input-button"
          onClick={props.onSubmit}
        >Add Note</button>
      </form>
    </div>
  )
}

export default NoteForm;