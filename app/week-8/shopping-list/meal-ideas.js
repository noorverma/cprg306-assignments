'use client';

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
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
        {meals && meals.map((meal) => (
          <li key={meal.idMeal} className="meal-item">
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
