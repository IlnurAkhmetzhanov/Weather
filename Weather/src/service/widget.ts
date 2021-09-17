export const getWeatherData = async (cityName:string) => {
    try {
        const rawResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=ru&appid=f28001184c9349f75ed19fb0c8e50a54`, {
            method: 'GET',
            headers: {

            },
        });



        if (rawResponse.ok) {
            const response = await rawResponse.json();
            debugger
            return response;
        }
        return false;
    } catch {
        return false;
    }
};