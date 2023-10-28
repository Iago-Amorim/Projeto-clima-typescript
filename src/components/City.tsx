import { climaProps } from '../types/clima'
import style from './style/City.module.css'

const City = ({ main, name, sys, weather, wind }: climaProps) => {
  return (
    <div className={ style.weather_data }>
        <h2>
            <i className="fa-solid fa-location-dot"></i>
            <span>{ name }</span>
            <img src={`https://flagsapi.com/${ sys.country }/flat/64.png`} alt="Bandeira do país" />
        </h2>
        <p className={ style.graus }>
            <span>{ Math.round(main.temp) }</span>
            &deg;C
        </p>
        <div className={ style.description_container }>
            <p>{ weather[0].description }</p>
            <img src={`http://openweathermap.org/img/wn/${ weather[0].icon }.png`} alt="Condições do tempo" />
        </div>
        <div className={ style.detalis_container }>
            <p className={ style.humidity }>
                <i className="fa-solid fa-droplet"></i>
                <span>{ main.humidity }%</span>
            </p>
            <p className={ style.wind }>
                <i className="fa-solid fa-wind"></i>
                <span>{ wind.speed } km/h</span>
            </p>
        </div>
    </div>
  )
}

export default City