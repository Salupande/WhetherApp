import React, {useState,useEffect} from 'react';
import './css/temp.css';


const Tempapp = () => {
const [city, setCity]= useState(null);
const [search, setSearch]= useState("mumbai");

useEffect( () =>{
   const fetchApi = async () =>{
   const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=83f2d2bee0c218bcbed790a5fac85a93`
   const response = await fetch(url);
   const resjson= await response.json();
   console.log(resjson)
   setCity(resjson.main);
}
   fetchApi();
},[search])
 return(
     <>
        <div className="box">
          <div className="inputData">
            <input type="search" className="inputField" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
          </div>
          {!city ? (
                  <p className="errormsg">No data Found</p>
              ) :(
               <div>
                <div className="info">
                  <h2 className="location">
                    <i className="fa fa-street-view"></i>{search}
                  </h2>
                  <h1 className="temp">{city.temp}°C</h1>
                  <h3 className="tempmin_max">min:{city.temp_min}°C | Max: {city.temp_max}°C</h3>
                </div>
                
                  <div class="wave"></div>
                
               </div>
              )}
         </div>
     </>
 );
}

export default Tempapp;