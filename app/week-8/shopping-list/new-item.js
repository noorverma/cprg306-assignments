'use client';

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: Math.random().toString(36).substring(2, 11), name, quantity, category };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10 ml-2">
      <div>
        <label className="block text-white"></label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border border-white rounded bg-white text-black"
          placeholder="Item name"
        />
      </div>
      <div className="flex space-x-2">
        <div className="w-1/3">
          <label className="block text-white"></label>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
          />
        </div>
        <div className="w-2/3">
          <label className="block text-white"></label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        +
      </button>
    </form>
  );
}
