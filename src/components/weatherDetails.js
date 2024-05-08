import '../Style/weatherDetails.css'
import earth from '../assets/earth.png'
const WeatherDetails = () => {
    return (  
        <div className="weather-details">
            <div className="container1">
                <div className="detail1">
                    <div className="Weathertitle">
                        Temperature
                    </div>
                    <div className="temperature">
                        <div className="degree">37</div>
                        <div className="degreetitle">degree celcius</div>
                    </div>
                </div>
                <div className="detail2">
                    <div className="detail2-container1">
                        Local Weather Report
                    </div>
                    <div className="detail2-container2">
                        <div className="image-tag">
                            <img className='earth' src={earth} alt="" />
                        </div>
                        <div className="day-and-date">
                            <div className="day">
                                Sunday
                            </div>
                            <div className="weather-type">
                                Sunny
                            </div>
                        </div>
                    </div>
                    <div className="detail2-container3">
                        <div className="wind">
                            Wind 24 nM West
                        </div>
                        <div className="humidity">
                            24 ppm
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                
            </div>
        </div>
    );
}
 
export default WeatherDetails;