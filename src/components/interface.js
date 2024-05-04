import '../Style/interface.css'
import { FaSearch } from "react-icons/fa";
const Interface = () => {
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
            <div className="weather-components"></div>
        </div>
     );
}
 
export default Interface;