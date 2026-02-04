import React, { useState } from 'react';
import LibraryManager from './LibraryManager';
import ProductCard from './ProductCard';
import SchoolSystem from './SchoolSystem'; 

function App() {
  const [view, setView] = useState('store'); 

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 9900,
      description: "High quality noise-canceling headphones.",
      stockCount: 15,
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 3000,
      description: "Tracks your health and fitness goals.",
      stockCount: 0, 
    },
    {
      id: 3,
      title: "Mechanical Keyboard",
      price: 12000,
      description: "RGB backlit mechanical keyboard for gaming.",
      stockCount: 5,
    },
    {
      id: 4,
      title: "Mouse",
      price: 1500,
      description: "RGB backlit mouse for gaming.",
      stockCount: 5,
    },
    {
      id: 5,
      title: "Laptop",
      price: 300000,
      description: "gaming laptop for powerful gameing",
      stockCount: 10,
    }
  ];

  
  const getButtonStyle = (buttonView) => ({
    margin: '0 10px',
    padding: '10px 20px',
    background: view === buttonView ? '#fff' : '#555', 
    color: view === buttonView ? '#000' : '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px'
  });

  return (
    <div>
      {/* --- NAVIGATION BUTTONS --- */}
      <nav style={{ padding: '20px', background: '#333', textAlign: 'center', marginBottom: '20px' }}>
        
        <button 
          onClick={() => setView('store')}
          style={getButtonStyle('store')}
        >
          Product Store
        </button>
        
        <button 
          onClick={() => setView('library')}
          style={getButtonStyle('library')}
        >
          Library
        </button>

        {/* 2. NEW BUTTON FOR SCHOOL SYSTEM */}
        <button 
          onClick={() => setView('school')}
          style={getButtonStyle('school')}
        >
          School System
        </button>

      </nav>

      {/* --- CONDITIONAL RENDERING --- */}
      
      {/* VIEW 1: Store */}
      {view === 'store' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
          <h2 style={{ width: '100%', textAlign: 'center' }}>My Product Store</h2>
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              stockCount={product.stockCount}
            />
          ))}
        </div>
      )}

      {/* VIEW 2: Library */}
      {view === 'library' && (
        <LibraryManager />
      )}

      {/* 3. NEW VIEW: School System */}
      {view === 'school' && (
        <SchoolSystem />
      )}

    </div>
  );
}

export default App;