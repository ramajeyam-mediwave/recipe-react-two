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
            <button
              onClick={() => setShowAddRecipe(true)}
              className={showAddRecipe ? "active" : ""}
            >
              Add Recipe
            </button>
          </div>
          <button
            onClick={() => setShowAddRecipe(false)}
            className={!showAddRecipe ? "active" : ""}
          >
            Home
          </button>
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
