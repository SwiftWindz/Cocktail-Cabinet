import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Search() {
    const { name } = useParams();
    const [drinks, setDrinks] = useState([]);
    
    useEffect(() => {
        Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => {
            setDrinks(response.data.drinks);
        })
    }, []);

    return (
        <div className='h-full w-screen p-8'>
            <div className=' grid grid-cols-1 gap-4 lg:grid-cols-3'>
            {drinks.map((drink, index) => {
            return <div key={index} class="flex justify-center">
                        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={drink.strDrinkThumb} alt={drink.strDrinkThumb} />
                        <div class="p-6 flex flex-col justify-start">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">{drink.strDrink}</h5>
                            <p class="text-gray-700 text-base mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque quae sequi vero quod rerum officiis nemo laboriosam odio explicabo magnam ratione consequuntur a at cumque minus, voluptatibus in eius.
                            </p>
                            <p class="text-gray-600 text-xs">{drink.strAlcoholic}</p>
                        </div>
                        </div>
                    </div>
            })}
            </div>
        </div>
    )
}
