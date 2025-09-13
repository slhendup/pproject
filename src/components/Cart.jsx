const Cart = ({ items, removeFromCart, onOrder }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    if (onOrder) {
      onOrder(items);
    } else {
      alert('Order placed!');
    }
  };

  return (
    <aside className="cart">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}{' '}
              <button
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-total">Total: ${total.toFixed(2)}</div>

      {items.length > 0 && (
        <button className="order-button" onClick={handleOrder}>
          Place Order
        </button>
      )}
    </aside>
  );
};

Cart.propTypes= {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  onOrder: PropTypes.func, // Optional
};

export default Cart;

