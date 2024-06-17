"use client";

import React, { useState } from 'react';
import Item from './item';
import items from './item.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedGroupedItems = Object.keys(groupedItems)
    .sort()
    .reduce((acc, category) => {
      acc[category] = groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
      return acc;
    }, {});

  return (

    <div>
     <div className="flex items-center space-x-2 mb-4">
      <span className="text-lg font-semibold text-black ">Sort by:</span>
        <button
          onClick={() => setSortBy('name')}
          className={`p-2 rounded ${sortBy === 'name' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-black'}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`p-2 rounded ${sortBy === 'category' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-black'}`}
        >
         Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={`p-2 rounded ${sortBy === 'group' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-black'}`}
        >
          Group by Category
        </button>
      </div>
      <ul>
        {sortBy === 'group' ? (
          Object.keys(sortedGroupedItems).map((category) => (
            <li key={category} className="mb-4">
              <h2 className="font-bold capitalize text-black ">{category}</h2>
              <ul>
                {sortedGroupedItems[category].map((item) => (
                  <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
              </ul>
            </li>
          ))
        ) : (
          sortedItems.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))
        )}
      </ul>
    </div>
  );
}
