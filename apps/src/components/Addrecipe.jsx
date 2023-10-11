import React, { useState } from "react";

function AddRecipe({ addRecipe }) {
  const [recipeData, setRecipeData] = useState({
    imageUrl: "",
    name: "",
    steps: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ ...recipeData });

    // Retrieve existing recipe cards from local storage
    const existingRecipeCards =
      JSON.parse(localStorage.getItem("recipeCards")) || [];

    // Add the new recipe card to the existing cards
    existingRecipeCards.push({ ...recipeData });

    // Save the updated cards to local storage
    localStorage.setItem("recipeCards", JSON.stringify(existingRecipeCards));

    // Reset the form fields
    setRecipeData({ imageUrl: "", name: "", steps: "" });
  };

  return (
    <div className="add-recipe">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={recipeData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Recipe Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipeData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="steps">Recipe Steps:</label>
          <textarea
            id="steps"
            name="steps"
            value={recipeData.steps}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRecipe;
