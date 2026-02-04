
import React, { useState } from 'react';

const LibraryManager = () => {
  
  const [books, setBooks] = useState([
    { id: 1, title: "Cosmos", author: "Carl Sagar" },
    { id: 2, title: "A Brief History of time ", author: "Stephen Hawking" },
    { id: 3, title: "The Martian", author: "Andy Weir" },
    { id: 4, title: "The Fabric of Cosmos", author: "Brian Greene" }

  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  
  const addBook = (e) => {
    e.preventDefault();
    if (!title || !author) return alert("Please fill in both fields");
    
    const newBook = {
      id: Date.now(),
      title: title,
      author: author
    };
    
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  // --- RENDER ---
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}> Library Manager</h1>

      {/* SEARCH BAR */}
      <input 
        style={styles.inputFull}
        placeholder="Search for a book..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ADD BOOK FORM */}
      <div style={styles.formCard}>
        <h3>Add New Book</h3>
        <form onSubmit={addBook} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input 
            style={styles.input} 
            placeholder="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
          <input 
            style={styles.input} 
            placeholder="Author" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
          />
          <button style={styles.buttonGreen} type="submit">Add</button>
        </form>
      </div>

      {/* BOOK LIST (Responsive) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
        {filteredBooks.map(book => (
          <div key={book.id} style={styles.card}>
            <div>
              <h4 style={{ margin: '0 0 5px 0' }}>{book.title}</h4>
              <p style={{ margin: 0, color: '#555', fontSize: '0.9rem' }}>{book.author}</p>
            </div>
            <button 
              onClick={() => removeBook(book.id)} 
              style={styles.buttonRed}
            >
              Remove
            </button>
          </div>
        ))}
        {filteredBooks.length === 0 && <p>No books found.</p>}
      </div>
    </div>
  );
};

// Simple Styles
const styles = {
  inputFull: { width: '100%', padding: '10px', marginBottom: '20px', boxSizing: 'border-box' },
  input: { flex: 1, padding: '8px', minWidth: '150px' },
  formCard: { background: '#f4f4f4', padding: '15px', borderRadius: '8px', marginBottom: '30px' },
  card: { 
    border: '1px solid #ddd', 
    borderRadius: '8px', 
    padding: '15px', 
    width: '200px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between',
    gap: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  buttonGreen: { background: '#28a745', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' },
  buttonRed: { background: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', alignSelf: 'flex-start' }
};

export default LibraryManager;