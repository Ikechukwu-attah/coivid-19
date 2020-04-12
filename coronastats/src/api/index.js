import axios from 'axios'

const url = 'https://covid.mathdro.id/api'

export const FetchData = async(country)=>{
  let changeableUrl = url
  if(country){
     changeableUrl = `${url}/countries/${country}`
  }

   try {
     const { data: {confirmed, recovered,deaths,lastUpdate} } =  await axios.get(changeableUrl)
     
      const modifiedData = {
          confirmed,
          recovered,
          deaths,
          lastUpdate
      }

      console.log('deaths', modifiedData.deaths)
      return modifiedData
   
    } catch (error) {
   
   }

}


export const FetchDailyData = async()=>{
  try {
     
    const {data} =   await axios.get(`${url}/daily`)

    const modifiedData = data.map((dailyData)=>({
        confirmed: dailyData.confirmed.total,
        deaths:      dailyData.deaths.total,
        date: dailyData.reportDate,

        
    }))
       
    return modifiedData
    // console.log('data', data)
  
  } catch (err) {
      console.log(err)
  }
       

}



export const CountriesData = async ()=>{
  try {
    const {data:{countries}} = await axios.get(`${url}/countries`)
         return countries.map((country)=>country.name)
    
    // console.log('country',country)
 
 
  } catch (error) {
    console.log(error)
  }
 

}