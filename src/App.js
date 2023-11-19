import React, { useState } from 'react';
import './App.css';
import ShoppingList from './ShoppingList';
import AddItemForm from './AddItemForm';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName, itemPrice, isChecked) => {
    setItems([...items, { name: itemName, price: itemPrice, checked: isChecked }]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const toggleCheck = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  const calculateTotalCheckedPrice = () => {
    return items.reduce((total, item) => {
      if (item.checked) {
        return total + item.price;
      }
      return total;
    }, 0);
  };

  const totalCheckedPrice = calculateTotalCheckedPrice();

  return (
    <div className="App">
      <h1>Groceries List</h1>
      <AddItemForm addItem={addItem} />
      <ShoppingList items={items} removeItem={removeItem} toggleCheck={toggleCheck} />
      <div>
        <h2>Total Price: RM{totalCheckedPrice}</h2>
      </div>
    </div>
  );
}

export default App;
