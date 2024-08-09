import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const RandomGifs = () => {
    const [gif, setGif]= useState('')
    const [loading, setloading]= useState('false')


    async function fetchData(){
        setloading(true)
        try{  const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        const gifUrl = data.data.images.downsized_large.url;
        console.log(gifUrl)
        setGif(gifUrl);
        setloading(false)
    }
        catch (error){
            console.log("error fetching the gif", error)
        }
    }
      useEffect(()=>{
        fetchData();
      },[])
    


    function clickHandler(){
        fetchData();
    }
  return (
    <div className='w-1/2  bg-yellow-500 rounded-lg border border-blue-300 flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline font-bold'>A Random Gif</h1>
        {
            loading ? (<Spinner/>):( <img src={gif} alt='random gift' width='450'/>)
        }
    
        <button onClick={clickHandler} className='w-10/12 bg-slate-300 text-lg py-2 rounded-lg mb-[20px]'>
            Generate
        </button>
    </div>

  )
}

export default RandomGifs