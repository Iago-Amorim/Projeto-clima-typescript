import { useState } from 'react'

import style from './style/Home.module.css'

import { climaProps } from '../types/clima'

import Search from '../components/Search'
import City from '../components/City'
import Error from '../components/Error'

const apiKey: string = import.meta.env.VITE_API_KEY

const Home = () => {
    const [clima, setClima] = useState<climaProps | null>(null)
    const [error, setError] = useState(false)

    const loadClima = async (cityName: string) => {
        setError(false)
        setClima(null)

        if (cityName) {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&units=metric&appid=${ apiKey }&lang=pt_br`)
    
            const data = await res.json()
            
            if (res.status === 404) {
                setError(true)
                return
            }

            const { main, name, sys, weather, wind } = data
    
            const climaData: climaProps = {
                main, 
                name, 
                sys, 
                weather, 
                wind
            }
    
            setClima(climaData)
        } else {
            setError(true)
        }
    }

    return (
        <div className={ style.form }>
            <h3>Confira o clima de uma cidade:</h3>
            <Search loadClima={ loadClima }/>
            {clima && <City {...clima} />}
            {error && <Error />}
            <h5>Criado por Iago Amorim</h5>
        </div>
    )
}

export default Home