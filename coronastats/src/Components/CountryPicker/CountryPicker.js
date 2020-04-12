import React,{useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import { CountriesData  } from '../../api'
import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange})=>{

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(()=>{
       const fetchCountry = async()=>{
          setFetchedCountries(await CountriesData())
       }

      fetchCountry()
      
      

    }, [setFetchedCountries] )

    console.log('countriies', fetchedCountries)

    return(

        <div className={styles.formControl}>
        <FormControl>
          <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
            <option value=''> Global</option>
             {fetchedCountries.map((country, i)=><option key={i} value={country}>{country}</option>)}
          </NativeSelect>
        </FormControl>
        </div>
    )
}

export default CountryPicker