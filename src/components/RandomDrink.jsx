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
    <div className="text-black w-screen h-full font-outfit">
        <div className='py-8 md:py-52 lg:py-36'>
            <div className=" flex gap-8 flex-col md:flex-row  justify-center items-center">
              <img src={randomDrink.strDrinkThumb} alt="Picture of a random drink" className='max-w-sm lg:max-w-lg  rounded-2xl' />
              <div className="p-6 text-center">
                <h5 className="text-gray-900 text-xl lg:text-3xl font-medium mb-2">{randomDrink.strDrink}</h5>
                <div className="text-gray-700 text-lg lg:text-2xl mb-4">
                  <h3 className='border-b-2 pb-2'>Ingredients</h3>
                  <ul className='pt-2 p-2'>
                  {ingredients.map((ingredient, index) => {
                      return <li className='pt-2' key={index}>{Measurements[index] ===  'undefined' ? "" : Measurements[index] + " "} {ingredient}</li>
                  })}
                  </ul>
                </div>
                {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
              </div>
            </div>
          </div>
    </div>
  );
}

