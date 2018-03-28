import React from 'react';

const NoteEntry = (props) => {

  return (
    <div className="entry">
      <div className="entry-header">
        <h2 className="entry-title">{props.title}</h2>
        <p className="timestamp">Tue Mar 20 2018 00:35:48</p>
      </div>
       <hr />
      <div className="entry-content">
        <p className="details">{props.details}</p>
        <div className="entry-buttons">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>

  )

}

export default NoteEntry;