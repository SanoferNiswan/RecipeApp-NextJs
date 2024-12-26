// src/app/recipe-list/[details]/page.js

import RecipeDetailsItem from "@/components/recipe-details";


async function fetchRecipeDetails(currentRecipeId){
    try{
        const response = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`)
        const data = await response.json();
        return data ;
    }catch(error){
        throw new Error(error);
    } 
}

export default async function RecipeDetails({params}){

    const {details} = params;

    const getRecipeDetails = await fetchRecipeDetails(details);
    return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
}