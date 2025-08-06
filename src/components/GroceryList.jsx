import React, { useEffect, useState } from 'react';

const GroceryList = ({ searchTerm, addToCart }) => {
 const allItems = [
        // Fruits
        { id: 1, name: 'Apple', category: 'Fruits', price: '₹120/kg', image: 'apple.jpg' },
        { id: 2, name: 'Banana', category: 'Fruits', price: '₹60/kg', image: 'banana.jpg' },
        { id: 3, name: 'Orange', category: 'Fruits', price: '₹90/kg', image: 'orange.jpg' },
        { id: 4, name: 'Mango', category: 'Fruits', price: '₹150/kg', image: 'mango.png' },
        { id: 5, name: 'Grapes', category: 'Fruits', price: '₹100/kg', image: 'grapes.jpg' },
        { id: 6, name: 'Pineapple', category: 'Fruits', price: '₹85/kg', image: 'pineapple.jpg' },

        // Vegetables
        { id: 7, name: 'Tomato', category: 'Vegetables', price: '₹30/kg', image: 'tomato.jpg' },
        { id: 8, name: 'Carrot', category: 'Vegetables', price: '₹40/kg', image: 'carrot.jpg' },
        { id: 9, name: 'Broccoli', category: 'Vegetables', price: '₹75/kg', image: 'brocolli.jpg' },
        { id: 10, name: 'Onion', category: 'Vegetables', price: '₹25/kg', image: 'onion.jpg' },
        { id: 11, name: 'Potato', category: 'Vegetables', price: '₹22/kg', image: 'potato.jpg' },
        { id: 12, name: 'Beans', category: 'Vegetables', price: '₹55/kg', image: 'beans.jpg' },

        // Beverages
        { id: 13, name: 'Orange Juice', category: 'Beverages', price: '₹50', image: 'orangejuice.jpg' },
        { id: 14, name: 'Lemonade', category: 'Beverages', price: '₹35', image: 'lemonade.jpg' },
        { id: 15, name: 'Milk', category: 'Beverages', price: '₹45', image: 'milk.jpg' },
        { id: 16, name: 'RedBull', category: 'Beverages', price: '₹20', image: 'redbull.jpg' },
        { id: 17, name: 'Mountain Dew', category: 'Beverages', price: '₹60', image: 'mountaindew.jpg' },
        { id: 18, name: 'Coconut Water', category: 'Beverages', price: '₹30', image: 'coco.jpg' },

        // Snacks
        { id: 19, name: 'Chips', category: 'Snacks', price: '₹20', image: 'chips.jpg' },
        { id: 20, name: 'Cookies', category: 'Snacks', price: '₹35', image: 'cookies.jpg' },
        { id: 21, name: 'Biscuits', category: 'Snacks', price: '₹25', image: 'oreo.jpg' },
        { id: 22, name: 'Nuts', category: 'Snacks', price: '₹150', image: 'nuts.jpg' },
        { id: 23, name: 'Snickers Bar', category: 'Snacks', price: '₹50', image: 'snicker.jpg' },
        { id: 24, name: 'Popcorn', category: 'Snacks', price: '₹40', image: 'popcorn.jpg' },
    ];


  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    const shuffled = [...allItems].sort(() => 0.5 - Math.random());
    setDisplayedItems(shuffled.slice(0, 8));
  }, []);

  const filterCategory = (category) => {
    const filtered = allItems.filter((item) => item.category === category);
    setDisplayedItems(filtered);
  };

  const filteredItems = searchTerm
    ? allItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : displayedItems;

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Categories Sidebar */}
        <div className="col-md-2">
          <h5 className="mb-3">Categories</h5>
          <button className="btn btn-outline-primary w-100 mb-2" onClick={() => filterCategory('Fruits')}>🍎 Fruits</button>
          <button className="btn btn-outline-success w-100 mb-2" onClick={() => filterCategory('Vegetables')}>🥦 Vegetables</button>
          <button className="btn btn-outline-warning w-100 mb-2" onClick={() => filterCategory('Beverages')}>🧃 Beverages</button>
          <button className="btn btn-outline-danger w-100 mb-2" onClick={() => filterCategory('Snacks')}>🍪 Snacks</button>
        </div>

        {/* Product Grid */}
        <div className="col-md-10">
          <div className="row">
            {filteredItems.map((item) => (
              <div className="col-md-3 mb-4" key={item.id}>
                <div className="card h-100 text-center shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: '150px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                    <button 
                      className="btn btn-success" 
                      onClick={() => addToCart(item)} // Triggers addToCart
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {filteredItems.length === 0 && (
              <div className="col-12 text-center mt-5">
                <h4>No items found!</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;