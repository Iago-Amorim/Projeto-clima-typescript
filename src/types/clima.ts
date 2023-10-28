export type climaProps = {
    main: {
        temp: number,
        humidity: number
    }, 
    name: string, 
    sys: {
        country: string
    },
    weather: {0: {
        description: string,
        icon: string
    }}, 
    wind: {
        speed: number
    }
}