import React,{Component} from 'react';
import {Cards, Charts, CountryPicker} from './Components'
import {FetchData} from './api'
import covidpics from './images/image.png'
import styles from './App.module.css'

class App extends Component {

  state = {
      data: {},
      country: ''
  }

   async componentDidMount(){
   const fetchdata  = await FetchData()
    this.setState({
        data: fetchdata
    })

    //  console.log(fetchdata)
    
    }

    handleCountryChange = async(country)=>{

        const fetchdata = await FetchData(country)
        this.setState({data:fetchdata, country:country})
      console.log('country',country)
    }
    render(){
        /*data was destructured line 24 take note
          => const data = this.state.data */

     const {data, country} = this.state
        return( 
         <div className={styles.container}>
         <img src = {covidpics} alt = 'Covid-19' className={styles.images} />
         <Cards data={data} />
         <CountryPicker handleCountryChange = {this.handleCountryChange}/>
         <Charts  data = {data} country = {country}  />
         </div>

        )
    }
}

export default App