'use client';

import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const [error, setError] = useState(null);

  const loadItems = async () => {
    try {
      if (user) {
        const itemsList = await getItems(user.uid);
        setItems(itemsList);
      }
    } catch (error) {
      console.error('Error loading items:', error);
      setError('Failed to load items.');
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    try {
      const id = await addItem(user.uid, newItem);
      setItems([...items, { ...newItem, id }]);
    } catch (error) {
      console.error('Error adding item:', error);
      setError('Failed to add item.');
    }
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(',')[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
      .trim();
    console.log(`Selected item name cleaned: ${cleanedItemName}`);
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="bg-indigo-200 min-h-screen p-4 flex">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>
        {error && <p className="text-red-500">{error}</p>}
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}
