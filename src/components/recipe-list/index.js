// src/component/recipe-list/index.js 

import {
    Card,
    CardContent
  } from "@/components/ui/card"

import Link from 'next/link'
  

export default function RecipeList({recipeList}){

    console.log(recipeList);
    
    return <div>
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
            <Link href={'/'}>Go home</Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    recipeList && recipeList.length > 0 ?
                    recipeList.map((recipe)=> <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
                    <Card>
                        <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
                            <div className="flex flex-col h-full">
                                <img 
                                src={recipe.image}
                                alt={recipe.name}
                                className="h-64 w-full object-cover object-top"
                                />
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900">{recipe.name}</h3>
                                    <div className="mt-4 flex item-center flex-wrap gap-2">
                                        <p className="text-lg text-gray-600">
                                            Rating: {recipe.rating}
                                        </p>
                                        <div className="ml-auto">
                                            <p className="text-lg text-gray-600 font-bold">
                                                {recipe.cuisine}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    </Link>)
                    :null
                }
            </div>
        </div>
    </div>
}