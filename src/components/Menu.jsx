import React from 'react';

const dishes = [
  { name: 'Cheeseburger', price: 5 },
  { name: 'Fries Combo', price: 3 },
  { name: 'Chicken Wrap', price: 4 },
  {name: 'lizerd', price:4}
];

const Menu = ({ addToCart }) => (
  <section className="menu">
    <h2>Popular Menu</h2>
    <div className="menu-list">
      {dishes.map((dish, idx) => (
        <div key={idx} className="menu-item">
          <span>{dish.name} - ${dish.price}</span>
          <button onClick={() => addToCart(dish)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </section>
);

export default Menu;
