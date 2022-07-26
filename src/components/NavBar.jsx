import React from 'react'
import {
    BiDrink,
    BiSearchAlt
} from 'react-icons/bi';

export default function NavBar() { 

    const [search, setSearch] = React.useState('');

    return (
        <div className='grid grid-cols-2 w-screen items-center p-4 text-white bg-violet-400 font-outfit'>
            <div className='flex'>
                <BiDrink className='text-3xl'/>
                <h1 className='font-bold text-2xl'>Drink Hub</h1>
            </div>
            <div className='flex flex-row-reverse gap-4 '>
                <ul className='inline-flex gap-4 place-content-center place-self-center'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/random">Random Drink</a></li>
                </ul>
                <div className='inline-flex flex-row-reverse'>
                    <a href={`/search/${search}`}><BiSearchAlt className='text-3xl text-violet-400 bg-white '/></a>
                    <input type="text" placeholder='Find a drink...' className=' text-black' onChange={(event) => {setSearch(event.target.value)}}  />
                </div>
            </div>
        </div>
  )
}
