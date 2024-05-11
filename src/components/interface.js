import '../Style/interface.css'
import { FaSearch } from "react-icons/fa";
import weatherIcon from '../assets/pngwing.com.png'
import React, { useState, useEffect } from 'react';
import WeatherDetails from './weatherDetails';
import SearchResultComponent from './searchResult';

const Interface = () => {
    const [results,setResults] = useState('')
    const [date,setdate] = useState(new Date())
    const [place,setPlace] = useState('')
    const [resVisibility,setResVisibility] = useState(false)
    const handleComponentClick=(lat,lon)=>{
        console.log("clicked");
        console.log(lat,lon);
        if(lat!=='' && lon!==''){
            console.log("inside weather");
            fetch("https://api.tomorrow.io/v4/weather/forecast?location="+lat+","+lon+"&apikey=3o2SlJvNcR2Ud7bhBe4UGQ6Oypghv4PS")
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
        setResVisibility(false)
    }
    const API = 'd2e73c37f81a413faab72660135d4ce8'
    const handleChange = (e)=>{
        setPlace(e.target.value)
        setResVisibility(false)
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
        // results[0].city
        // results[0].state
        // results[0].lat
        // results[0].lon
        .then((data)=>{
            const newResults = data.results.map(result => ({
                placename: result.city,
                state: result.state,
                lat: result.lat,
                long: result.lon
            })); 
            // Update the results state
            setResults(newResults)
            setResVisibility(true)
            console.log(results);
            console.log("printing fetched data");
            console.log(data);
        }).catch((e)=>{
            console.log(e);
        })
    }
    console.log("fnished coordinate");

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
               <div className="select-area">
                <div className={`search-results${resVisibility?' visible':''}`}>
                   {results &&  <SearchResultComponent results={results} onClick={handleComponentClick} />}
                </div>
               bestway to know your weather
               </div>
            </div>
            <div className="weather-components">
                <div className="weather-title">
                    <img src={weatherIcon} alt="" />
                    <div className="time-and-details">
                        Total Weather Details
                        <p>{date.toLocaleTimeString()}</p>
                    </div>
                </div>
                <WeatherDetails />
            </div>
        </div>
     );
}
 
export default Interface;