import React from 'react';

const NoteForm = (props) => {
  return (
    <div className="form-section">
      <form>
        <input type="text" autoFocus/><br/>
        <textarea cols="30" rows="10"></textarea><br/>
        <button>Add Note</button>
      </form>
    </div>
  )
}

export default NoteForm;