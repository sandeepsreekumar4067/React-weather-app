import '../Style/interface.css'
import { FaSearch } from "react-icons/fa";
import weatherIcon from '../assets/pngwing.com.png'
import React, { useState, useEffect } from 'react';
import WeatherDetails from './weatherDetails';

const Interface = () => {
    const [date,setdate] = useState(new Date())
    const [place,setPlace] = useState('')
    const [latitudes,setLatitudes] = useState('')
    const [longitudes,setLongitudes] = useState('')
    const API = 'd2e73c37f81a413faab72660135d4ce8'
    const handleChange = (e)=>{
        setPlace(e.target.value)
    }
    useEffect(()=>{
        const timer = setInterval(() => {
            setdate(new Date())
    }, 1000);
    return clearInterval(timer)
},[])
const searchClick = () =>{

    if(place.length> 0){
        console.log("inside cordinate");
        fetch("https://api.geoapify.com/v1/geocode/search?text="+place.toString()+"&format=json&apiKey="+API)
        .then((response)=>{
           if(response.ok){
            return response.json()
           }else{
            throw new Error("Unexpected Value")
           }
        })
        .then((data)=>{
            setLatitudes(data.results[0].lat);
            setLongitudes(data.results[0].lon)
        }).catch((e)=>{
            console.log(e);
        })
    }
    console.log("fnished coordinate");
    if(latitudes!=='' && longitudes!==''){
        console.log("inside weather");
        fetch("https://api.tomorrow.io/v4/weather/forecast?location="+latitudes+","+longitudes+"&apikey=3o2SlJvNcR2Ud7bhBe4UGQ6Oypghv4PS")
        .then((response)=>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Unexpected Value")
            }
        }).then((data)=>{
            console.log(data);
        }).catch((e)=>{
            console.log(e);
        })
    }

}
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
                    <input type="text" placeholder='Enter the Location' value={place} onChange={handleChange}/>
                    <div className="search-button" onClick={searchClick}>
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