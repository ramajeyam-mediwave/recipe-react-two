import React, { useState } from "react";
function AddRecipe({ addRecipe, submitFunc }) {
  const [recipeData, setRecipeData] = useState({
    imageUrl: "",
    name: "",
    steps: [""], // Initialize steps as an array with an empty string
  });
  const handleChange = (e, index) => {
    const updatedSteps = [...recipeData.steps];
    updatedSteps[index] = e.target.value;
    setRecipeData({ ...recipeData, steps: updatedSteps });
  };
  const handleAddStep = () => {
    setRecipeData({ ...recipeData, steps: [...recipeData.steps, ""] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ ...recipeData });
    const existingRecipeCards =
      JSON.parse(localStorage.getItem("recipeCards")) || [];
    existingRecipeCards.push({ ...recipeData });
    localStorage.setItem("recipeCards", JSON.stringify(existingRecipeCards));
    setRecipeData({ imageUrl: "", name: "", steps: [""] });
    submitFunc(false);
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
            onChange={(e) =>
              setRecipeData({ ...recipeData, imageUrl: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Recipe Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipeData.name}
            onChange={(e) =>
              setRecipeData({ ...recipeData, name: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="steps">Recipe Steps:</label>
          {recipeData.steps.map((step, index) => (
            <div key={index} className="step-input">
              <textarea
                id={`step-${index}`}
                name={`step-${index}`}
                value={step}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddStep}>
            Add Steps
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default AddRecipe;
