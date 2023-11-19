import React from 'react';

function ShoppingList({ items, removeItem, toggleCheck }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => toggleCheck(index)}
          />
          <span>{item.name} - RM{item.price}</span>
          <button onClick={() => removeItem(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
