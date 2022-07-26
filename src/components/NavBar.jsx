import React, {useState} from 'react'
import {
    BiDrink,
    BiSearchAlt
} from 'react-icons/bi';
import { 
    HiMenu,
    HiX
} from "react-icons/hi";
import { Link } from 'react-router-dom';


export default function NavBar() { 
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const [search, setSearch] = React.useState('');

    return (
        <>
        <div className={!nav ? 'grid grid-cols-2 w-screen items-center p-4 text-white bg-violet-400 font-outfit' : "hidden md:grid grid-cols-2 w-screen items-center p-4 text-white bg-violet-400 font-outfit"}>
            <div className='flex'>
                <BiDrink className='text-3xl'/>
                <h1 className='font-bold text-2xl'>Drink Hub</h1>
            </div>
            <div className='hidden md:flex text-xs lg:text-lg md:flex-row-reverse gap-4 '>
                <ul className='inline-flex gap-4 place-content-center place-self-center'>
                    <li><a href="/#/">Home</a></li>
                    <li><a href="/#/random">Random Drink</a></li>
                </ul>
                <div className='inline-flex flex-row-reverse'>
                    <a href={`/#/search/${search}`}><BiSearchAlt className='text-3xl text-violet-400 bg-white '/></a>
                    <input type="text" placeholder='Find a drink...' className=' text-black' onChange={(event) => {setSearch(event.target.value)}}  />
                </div>
            </div>
            <div className='inline-flex flex-row-reverse md:hidden'>
                <button onClick={handleClick}><HiMenu className='text-3xl'/></button>
            </div>  
        </div>
        <div className={!nav ? 'hidden' : "fixed items-center justify-center  md:hidden w-screen h-screen bg-slate-600 text-white font-outfit"}>
            <div className='w-full place-items-end flex flex-row-reverse p-4'>
                <button onClick={handleClick}><HiX className='text-3xl'/></button>          
            </div>
            <div>
                <ul className=" pt-40 flex flex-col gap-8 justify-center place-content-center">
                    <li className='text-center text-5xl'>Drink Hub</li>
                    <div className='inline-flex flex-row-reverse justify-center'>
                        <a href={`/#/search/${search}`} onClick={handleClick}><BiSearchAlt className='text-3xl text-violet-400 bg-white '/></a>
                        <input type="text" placeholder='Find a drink...' className=' text-black' onChange={(event) => {setSearch(event.target.value)}}  />
                    </div>
                    <button onClick={handleClick}><li className="hover:text-violet-300 text-2xl"><Link to="/">Home</Link></li></button>
                    <button onClick={handleClick}><li className="hover:text-violet-300 text-2xl"><Link to="/random">Random Drink</Link></li></button>
                </ul>
            </div>
        </div>
        </>
  )
}
