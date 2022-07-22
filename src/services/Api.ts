export const fetchData = async (city: string) => {
    const url = `${import.meta.env.VITE_API_URL + import.meta.env.VITE_KEY}&q=${city}&aqi=no`;

    const fetchResponse = await fetch(url);

    const data = fetchResponse.json();
    if (fetchResponse.status === 200) {
        return data;
    } else {
        alert("City not found")
        return data;
    }
};