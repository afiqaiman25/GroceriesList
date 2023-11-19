import React, { useState } from 'react';

function AddItemForm({ addItem }) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() && itemPrice.trim() !== '' && !isNaN(itemPrice)) {
      addItem(itemName, parseFloat(itemPrice)); // Parsing price to float
      setItemName('');
      setItemPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter an item"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter price"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddItemForm;
