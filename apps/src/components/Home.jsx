import React from "react";

function Home({ recipes }) {
  return (
    <div className="home">
      <h2>Recipes</h2>
      <div className="recipe-container">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.imageUrl} alt={recipe.name} />
            <div className="recipe-details">
              <h3>{recipe.name}</h3>
              <p>{recipe.steps}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;