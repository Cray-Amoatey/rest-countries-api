import * as C from './styles'
import {useParams, Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import {CountryTS} from '../../types/Country'
import { SingleCountry } from '../../components/SingleCountry'
import {api} from '../../api'

export const CountryPage = () => {
    const {name} = useParams()

    const [loading, setloading]= useState(false)
    const [country, setCountry] = useState<CountryTs[]>([])

    useEffect(()=> {
        if(name) {
            getCountry(name)
        }
    },[name])

    const getCountry = async (param: string) => {
        setloading(true)
        let country = await api.getCountry(param)
        setCountry(country)
        console.log(country)
        setloading(false)
    }
    

    return (
        <C.CountryPage>
            <div className="container">
                <Link to="/" className='back--button'>Back</Link>
                {loading &&
                <div className="loading">Loading...</div>
                }
                {!loading &&
                country.map((item) => (
                    <SingleCountry
                    flag={item.flag.png}
                    name={item.name}
                    nativeName={item.nativeName}
                    population={item.capital}
                    region={item.region}
                    subregion={item.subregion}
                    capital={item.capital}
                    topLevelDomain={item.topLevelDomain[0]}
                    currencie={item.currencies && item.currencies}
                    Languages={item.languages}
                    borders={item.borders}

                    />
                ))
                }
            </div>
        </C.CountryPage>
    )
}