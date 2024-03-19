import React, { useState, useEffect } from 'react';
import './AddNoteForm.css';

const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes data from the backend when the component mounts
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch(`https://notes-web-nfpq.onrender.com/get-notes/${'65f27d8bbb4194229d815a05'}`);
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let userId = '65f27d8bbb4194229d815a05'
      const response = await fetch('https://notes-web-nfpq.onrender.com/add-note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, userId }),
      });

      const data = await response.json();
      console.log(data);

      
      fetchNotes();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const handleDelete = async (noteId) => {
    try {
      
      await fetch(`https://notes-web-nfpq.onrender.com/delete-note/${noteId}`, {
        method: 'DELETE',
      });

      
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleEdit = async (noteId) => {
    // Implement edit functionality as needed
    console.log('Editing note:', noteId);
  };

  return (
    <div>
      
      <div className="add-note-container">
        <h2>Add Note</h2>
        <form onSubmit={handleSubmit} className="add-note-form">
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="textarea-field"
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">Add Note</button>
        </form>
      </div>
      <div className="notes-container">
        <h2>Notes</h2>
        <ul>
          {notes.map((note) => (
            <li key={note._id}>
              <div>
                <strong>{note.title}</strong>
                <p>{note.content}</p>
                
              </div>
              <div className="action-buttons">
                
                <button onClick={() => handleDelete(note._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddNoteForm;
