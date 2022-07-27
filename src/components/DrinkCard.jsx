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
    <div className="text-black w-screen h-full font-outfit">
        <div className='py-8 md:py-52 lg:py-36'>
            <div className=" flex gap-8 flex-col md:flex-row  justify-center items-center">
              <img src={drink.strDrinkThumb} alt="Picture of a random drink" className='max-w-sm lg:max-w-lg  rounded-2xl' />
              <div className="p-6 text-center">
                <h5 className="text-gray-900 text-xl lg:text-3xl font-medium mb-2">{drink.strDrink}</h5>
                <div className="text-gray-700 text-lg lg:text-2xl mb-4">
                  <h3 className='border-b-2 pb-2'>Ingredients</h3>
                  <ul className='pt-2 p-2'>
                  {ingredients.map((ingredient, index) => {
                      return <li className='pt-2' key={index}>{Measurements[index] ===  'undefined' ? "" : Measurements[index] + " "} {ingredient}</li>
                  })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}