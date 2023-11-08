import { SEARCH } from "../assets/images"
import { BASE_URL } from "../assets/config"
import Content from "./content"
import { WEATHER_URL,API_KEY } from "../assets/config"
import { useState } from "react"
import axios from "axios"
import {toast} from 'react-toastify'
import { Input } from "@nextui-org/react";

const Card = ()=>{

    const [city,setCity] = useState('')
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    function validation(){
        try {
            setError(null)
            if(city === "") throw new Error("city name required")
            if(city.includes(' ')) throw new Error("city cannot contain spaces")
            const specialCharacterRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\]/;
            if (specialCharacterRegex.test(city)) {
              throw new Error("city name cannot contain special characters");
            }
        } catch (err) {
            console.log(err);
            setError(err?.data?.message ||  err.message)
        }
    }
    
    async function getData(){
       try {
        if(error){
            throw new Error("please clear all error") 
        }
        const res = await axios.get(`${WEATHER_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        console.log(res);
        setData(res.data)
       } catch (err) {
        console.log(err);
        toast.error(err.response.data.message  ||  err.message)
       }
    }
    return(
        <section className="card">
            <div className="search">
                <Input
                 type="text" 
                 name="city" 
                 value={city} 
                 onChange={(e)=>setCity(e.target.value)} 
                 placeholder="Enter a city name" 
                 spellCheck="false"
                 onKeyUp={validation}
                 color={error ? 'danger' : 'success'}
                 errorMessage={error}
                 />
                <button onClick={getData}><img src={BASE_URL+SEARCH}/></button>
            </div>
            {data &&  <Content data={data}/>}
          
        </section>
    )
}
export default Card