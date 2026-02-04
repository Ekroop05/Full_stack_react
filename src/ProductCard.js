import React from 'react';
import './ProductCard.css';


const ProductCard = ({ image, title, price, description, stockCount }) => {
  

  const isInStock = stockCount > 0;
  const stockClass = isInStock ? 'stock-available' : 'stock-out';
  const stockText = isInStock ? `${stockCount} in Stock` : 'Out of Stock';

  return (
    <div className="product-card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        {/* Visual Stock Badge */}
        <span className={`stock-badge ${stockClass}`}>
          {stockText}
        </span>
      </div>

      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        <div className="card-footer">
          <span className="card-price">{price}</span>
          <button className="card-btn" disabled={!isInStock}>
            {isInStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;