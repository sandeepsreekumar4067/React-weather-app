import '../Style/interface.css'
import { FaSearch } from "react-icons/fa";
import weatherIcon from '../assets/pngwing.com.png'
import React, { useState, useEffect } from 'react';
import WeatherDetails from './weatherDetails';

const Interface = () => {
    const [date,setdate] = useState(new Date())
    useEffect(()=>{
        const timer = setInterval(() => {
            setdate(new Date())
    }, 1000);
    return clearInterval(timer)
},[])
    return ( 
        <div className="interface">
            <div className="title-components">
                <h1>
                    Different kind of weather
                    <h2>24/7</h2>
                </h1>
                <div className="subtitles">
                Step into a Weather Adventure: Discover Daily Forecasts, Live Updates, and Expert Insights for Every Climate Quest!
                </div>
                <div className="input-box">
                    <div className="spacer"></div>
                    <FaSearch color='#31E1F7' size={35} opacity={1}/>
                    <input type="text" placeholder='Enter the Location' />
                    <div className="search-button">
                        Search
                    </div>
                </div>
                <br />
                bestway to know your weather
            </div>
            <div className="weather-components">
                <div className="weather-title">
                    <img src={weatherIcon} alt="" />
                    <div className="time-and-details">
                        Total Weather Details
                        <p>{date.toLocaleTimeString()}</p>
                    </div>
                </div>
                <WeatherDetails/>
            </div>
        </div>
     );
}
 
export default Interface;