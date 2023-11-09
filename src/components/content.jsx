import { WIND,HUMIDITY} from "../assets/images"
import PropTypes from 'prop-types'; 
import { BASE_URL} from "../assets/config"
import getImage from "../utils/useGetImage";

const Content = ({data})=>{
          
      const img = data && getImage(data?.weather[0]?.main)
    return(
        <div className="weather">
           <img src={BASE_URL+img} alt="clouds" />
           <h1 className="temp">{data?.main?.temp}°C</h1>
           <h2 className="city">{data?.name}</h2>
           <div className="details">
                  <div className="col">
                    <img src={BASE_URL+HUMIDITY} alt="humidity" className="weather_icon"/>
                    <div>
                        <p className="humidity">{data?.main?.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                  </div>
                  <div className="col">
                    <img src={BASE_URL+WIND} alt="wind" className="weather_icon"/>
                    <div>
                        <p className="wind">{data?.wind?.speed} km/h</p>
                        <p>Wind speed</p>
                    </div>
                  </div>
           </div>
        </div>
    )
}
Content.propTypes={
    data:PropTypes.object
}

export default Content