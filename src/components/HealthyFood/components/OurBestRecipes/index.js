import React from 'react';

import {
  ContainerBestRecipes,
  ContentBestRecipes,
  ImageBestRecipes,
  ContentTextBestRecipes,
  TitleBestRecipes,
  SubtitleBestRecipes,
  ImageBestRecipeCard,
} from './styled';

import api from '../../../../services/api.json';

export default function OurBestRecipes() {
  return (
    <ContainerBestRecipes id="recipes">
      <ContentBestRecipes>
        <ContentTextBestRecipes>
          <TitleBestRecipes>Our Best Recipes</TitleBestRecipes>
          <SubtitleBestRecipes>
            Far far away, behind the word mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </SubtitleBestRecipes>
        </ContentTextBestRecipes>
        <ImageBestRecipes>
          {api.recipes.map((recipe, i) => (
            <ImageBestRecipeCard key={recipe.name}>
              <div>
                <img src={recipe.img} alt={recipe.name} />
              </div>
              <div>
                <h2>{recipe.name}</h2>
                <button>See Recipe</button>
              </div>
            </ImageBestRecipeCard>
          ))}
        </ImageBestRecipes>
      </ContentBestRecipes>
    </ContainerBestRecipes>
  );
}
