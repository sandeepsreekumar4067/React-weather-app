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
                <div className="input-box">
                    <FaSearch color='#31E1F7' size={35} />
                    <input type="text" />
                    <div className="search-button">
                        
                    </div>
                </div>
            </div>
            <div className="weather-components"></div>
        </div>
     );
}
 
export default Interface;