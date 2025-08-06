import React, { useState } from 'react';
import { FaTrash, FaPlus, FaMinus, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, updateCart, removeFromCart, clearCart }) => {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const navigate = useNavigate();
  
  // Calculate total amount
  const totalAmount = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, '')); // Extract numbers from price string
    return sum + (price * item.quantity);
  }, 0);

  // Handle payment method selection
  const handlePayment = (method) => {
    // Process payment (in a real app, you would call an API here)
    console.log(`Payment method selected: ${method}`);
    setOrderSuccess(true);
    clearCart(); // Clear the cart immediately
    
    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  // Continue shopping
  const continueShopping = () => {
    navigate('/');
  };

  if (orderSuccess) {
    return (
      <div className="container text-center py-5">
        <div className="alert alert-success">
          <h4>🎉 Your purchase is successful!</h4>
          <p>Thank you for shopping with us.</p>
        </div>
        <button 
          onClick={continueShopping}
          className="btn btn-primary mt-3"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  if (showPaymentOptions) {
    return (
      <div className="container mt-4">
        <button 
          onClick={() => setShowPaymentOptions(false)}
          className="btn btn-outline-secondary mb-3"
        >
          <FaArrowLeft /> Back to Cart
        </button>
        
        <div className="card shadow">
          <div className="card-body">
            <h3 className="card-title mb-4">Select Payment Method</h3>
            
            <div className="row">
              <div className="col-md-6 mb-3">
                <div 
                  className="card h-100 payment-option"
                  onClick={() => handlePayment('card')}
                >
                  <div className="card-body text-center">
                    <div className="py-4">
                      <h4>💳 Card/UPI Payment</h4>
                      <p className="text-muted">Pay using credit/debit card or UPI</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-3">
                <div 
                  className="card h-100 payment-option"
                  onClick={() => handlePayment('cod')}
                >
                  <div className="card-body text-center">
                    <div className="py-4">
                      <h4>💰 Cash on Delivery</h4>
                      <p className="text-muted">Pay when you receive your order</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Cart ({cart.length} items)</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-5">
          <h4>Your cart is empty!</h4>
          <p>Add some delicious groceries first 🛒</p>
          <button 
            onClick={continueShopping}
            className="btn btn-primary mt-3"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-md-8">
              {cart.map((item) => (
                <div key={item.id} className="card mb-3 shadow-sm">
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img 
                        src={item.image} 
                        className="img-fluid rounded-start h-100" 
                        alt={item.name}
                        style={{objectFit: 'cover'}}
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body d-flex flex-column h-100">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title">{item.name}</h5>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="btn btn-sm btn-outline-danger"
                          >
                            <FaTrash />
                          </button>
                        </div>
                        <p className="card-text">{item.price}</p>
                        
                        <div className="mt-auto d-flex align-items-center">
                          <div className="input-group" style={{width: '120px'}}>
                            <button 
                              className="btn btn-outline-secondary" 
                              onClick={() => updateCart(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <FaMinus />
                            </button>
                            <input
                              type="text"
                              className="form-control text-center"
                              value={item.quantity}
                              readOnly
                            />
                            <button 
                              className="btn btn-outline-secondary"
                              onClick={() => updateCart(item.id, item.quantity + 1)}
                            >
                              <FaPlus />
                            </button>
                          </div>
                          <div className="ms-auto">
                            <h5>₹{parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm sticky-top" style={{top: '20px'}}>
                <div className="card-body">
                  <h4 className="card-title">Order Summary</h4>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>₹{totalAmount}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Delivery:</span>
                    <span>FREE</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <h5>Total:</h5>
                    <h5>₹{totalAmount}</h5>
                  </div>
                  <button 
                    onClick={() => setShowPaymentOptions(true)}
                    className="btn btn-success w-100 py-2"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;