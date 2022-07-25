import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function RandomDrink() {
  const [randomDrink, setRandomDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [Measurements, setMeasurements] = useState([]);

  // runs when loaded and calls the API
  useEffect(() => {
    //get request with axios
    Axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        //set the list of users to the response data
        setRandomDrink(response.data.drinks[0]);
        var i = 1;
        while(true) {
          if(response.data.drinks[0][`strIngredient${i}`] === null || response.data.drinks[0][`strIngredient${i}`] === "null"){break}
          ingredients.push(response.data.drinks[0][`strIngredient${i}`]);
          i++;
        }
        i = 1;
        while(true) {
            if(response.data.drinks[0][`strMeasure${i}`] === null || response.data.drinks[0][`strMeasure${i}`] === "null"){break}
            Measurements.push(response.data.drinks[0][`strMeasure${i}`]);
            i++;
        }
        console.log("This is getting updated");
        console.log(response.data.drinks[0]);
    })
  }, []);

  return (
    <div className="text-black w-screen h-screen bg-gradient-to-br from-violet-500 to-black font-outfit">
        <div className='bg-white rounded-2xl p-8'>
            <h2 className='text-5xl text-center pt-8 font-bold '>{randomDrink.strDrink}</h2>
            <div className=" grid grid-cols-1 lg:grid-cols-2 p-8 border-t-2">
            <div className="">
                <img src={randomDrink.strDrinkThumb} alt="Picture of a random drink" />
            </div>
            <div className="text-4xl place-content-center place-self-center">
                <h3 className='border-b-2 pb-2'>Ingredients</h3>
                <ul className='pt-2'>
                {ingredients.map((ingredient, index) => {
                    return <li key={index}>{Measurements[index] ===  'undefined' ? "" : Measurements[index] + " "} {ingredient}</li>
                })}
                </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

