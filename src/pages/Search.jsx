import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Search() {
    const { name } = useParams();
    const [drinks, setDrinks] = useState([]);
    
    useEffect(() => {
        Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => {
            if(response.data.drinks.length === 0){
                setDrinks([]);
            }
            setDrinks(response.data.drinks);
        })
    }, []);

    return (
        <div className='max-h-full min-h-screen flex-wrap w-screen p-16 font-outfit pb-20'>
            <h1 className='text-2xl font-bold pb-8 '>Search results for "{name}"</h1>
            <div className=' grid grid-cols-1 gap-4 lg:grid-cols-3'>
                {drinks.map((drink, index) => {
                if(drink === null) {
                    return
                }
                else {
                    return <div key={index} className="flex">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-auto h-96 md:h-auto object-cover md:w-48  md:rounded-none md:rounded-l-lg" src={drink.strDrinkThumb} alt={drink.strDrinkThumb} />
                    <div className="p-6 flex flex-col justify-start">
                        <Link to={`/drink/${drink.strDrink}`}><h5 className="text-gray-900 text-xl font-medium mb-2">{drink.strDrink}</h5></Link>
                        <p className="text-gray-700 text-base mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque quae sequi vero quod rerum officiis nemo laboriosam odio explicabo magnam ratione consequuntur a at cumque minus, voluptatibus in eius.
                        </p>
                        <p className="text-gray-600 text-xs">{drink.strAlcoholic}</p>
                    </div>
                    </div>
                </div>
                }
                })}
            </div>
        </div>
    )
}
