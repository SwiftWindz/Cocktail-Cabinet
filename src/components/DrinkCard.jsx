import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function DrinkCard() {
    const { name } = useParams();
  const [drink, setDrink] = useState({});
  const [ingredients] = useState([]);
  const [Measurements] = useState([]);

  // runs when loaded and calls the API
  useEffect(() => {
    //get request with axios
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => {
        //set the list of users to the response data
        console.log(name);
        setDrink(response.data.drinks[0]);
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
    <div className="text-black w-screen h-screen bg-white font-outfit">
        <div className=' p-8'>
            <h2 className='text-5xl text-center pt-8 font-bold '>{drink.strDrink}</h2>
            <div className=" grid grid-cols-1 lg:grid-cols-2 p-8 border-t-2">
            <div className="">
                <img src={drink.strDrinkThumb} alt="Picture of a random drink" />
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