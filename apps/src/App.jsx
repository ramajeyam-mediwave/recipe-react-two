import React, { useState, useEffect } from "react";
import "./App.css";
import AddRecipe from "./components/Addrecipe";
import Home from "./components/Home";

function App() {
  const [recipes, setRecipes] = useState(getFromStorage());
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  function getFromStorage() {
    const savedValues = localStorage.getItem("recipeCards");
    if (savedValues) {
      const storedTitles = JSON.parse(savedValues);
      return storedTitles;
    }
    return [];
  }
  function submitFunc(boolean) {
    setShowAddRecipe(boolean);
  }

  return (
    <div className="app">
      <nav>
        <ul>
          <div>
            <li>
              <input
                type="radio"
                id="add-recipe"
                name="view"
                value="add-recipe"
                checked={showAddRecipe}
                onChange={() => setShowAddRecipe(true)}
              />
              <label htmlFor="add-recipe">Add Recipe</label>
            </li>
          </div>
          <li>
            <input
              type="radio"
              id="home"
              name="view"
              value="home"
              checked={!showAddRecipe}
              onChange={() => setShowAddRecipe(false)}
            />
            <label htmlFor="home">Home</label>
          </li>
        </ul>
      </nav>
      {showAddRecipe ? (
        <AddRecipe addRecipe={addRecipe} submitFunc={submitFunc} />
      ) : (
        <Home recipes={recipes} />
      )}
    </div>
  );
}

export default App;
