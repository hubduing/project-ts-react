import React, {useState} from 'react'
import axios from 'axios'
import './Weather.scss'
import '../../index.scss'

// site https://home.openweathermap.org/api_keys

export const Weather = () => {
  const apiKey = 'b2aa9137771fc6187fd285b4eb1aff1f';
  const [city, setCity] = useState("Canberra");
  const [country, setCountry] = useState("AU");
  const [temp, setTemp] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [showMyComponent, setShowMyComponent] = useState(false);

  const getWeatherData = async(city, country) => {
    await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
    }).then((res) => {
      setTemp(res.data.main.temp - 273.15)
      setIcon(res.data.weather[0].icon)
      setMin(res.data.main.temp_min - 273.15)
      setMax(res.data.main.temp_max - 273.15)
      setDescription(res.data.weather[0].description)
      setCountry(res.data.sys.country)
      setShowMyComponent(true)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className="weather">
      
      <div className="wrapper dgrid">
        <div className="weather-box">
          <h2>Узнайте погоду в пункте назначения</h2>
          <div className="box-input">
            <label htmlFor="box-input__city">Выберите город &nbsp;</label>
            <input id="box-input__city" type="text" value={city} onChange={(e) => setCity(e.target.value)}
            placeholder="City name" className="mx-1 p-1" />
          </div>
          <div className="box-input">
            <label htmlFor="box-input__country">Выберите страну &nbsp;</label>
            <input id="box-input__country" type="text" value={country} onChange={(e) => setCountry(e.target.value)}
            placeholder="Country name" className="mx-1 p-1" />
          </div>
          <button 
            onClick={() => getWeatherData(city, country)} 
            className="btn" 
            >
              Узнать погоду
          </button>
        </div>
        <div className="weather-box">
          
        {showMyComponent ? 
        (<div className="data__container p-4 my-5" >
          <h1>{city}, {country}</h1>

          <div className="my-2">
            <img 
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
            alt="weather-icon"
            style={{width:50, height: 50}}
            />
          </div>

          {temp ? (<h1>{Math.floor(temp)} ℃</h1>) : null}

          <h4 className="my-4">
            Min:<span>{Math.floor(min)}℃</span><span className="mx-3"> |
            </span> Max:<span>{Math.floor(max)}℃</span>
          </h4>

          <h1>{description}</h1>

          <h4 className="my-4">Date: {new Date().toLocaleDateString()}</h4>

        </div>) 
        : null}
        </div>
        
      </div>
    </div>
  )
}
export default Weather;