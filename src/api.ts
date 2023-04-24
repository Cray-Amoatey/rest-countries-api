import axios from "axios";

const http = axios.create({
    baseURL: 'https://restcountries.com/v2'
})

export const api =  {
    getCountries: async () => {
        const response = await http.get('/all')
        return response.data
    },
    getCountry: async (name: string) => {
        const response = await http.get(`/name${name}?fullText-true`)
        return response.data
    },
    getCountryByCode: async (code: string) => {
        const response = await http.get( `/alpha?codes-${code}`)
        return response.data
    }
}

// export let api;
// async function getCountries (){
// api = await axios.get("https://restcountries.com/v3.1/all");
// const data = await api.data
// console.log(data)

// }
// getCountries();

