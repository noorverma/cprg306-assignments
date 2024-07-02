'use client';

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
      return [];
    }
  };

  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2 className="text-xl font-bold">Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal} className="meal-item">
              <p>{meal.strMeal}</p>
            </li>
          ))
        ) : (
          <p>No meal ideas available for this ingredient.</p>
        )}
      </ul>
    </div>
  );
};

export default MealIdeas;
