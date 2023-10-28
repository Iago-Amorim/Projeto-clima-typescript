type SearchProps = {
    loadClima: (cityName: string) => Promise<void>
}

import { useState, KeyboardEvent } from 'react'

import style from './style/Search.module.css'

const Search = ({ loadClima }: SearchProps ) => {
    const [cityName, setCityName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadClima(cityName)
        }
    }

    return (
        <div className={style.form_input_container}>
            <input type="text" placeholder='Digite o nome da cidade' onChange={(e) => setCityName(e.target.value)} onKeyDown={handleKeyDown}/>
            <button onClick={() => (loadClima(cityName))}>
                <i className='fa-solid fa-magnifying-glass'></i>
            </button>
        </div>
    )
}

export default Search