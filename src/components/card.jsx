import { BASE_URL,SEARCH } from "../assets/images"
const Card = ()=>{
    return(
        <section className="card">
            <div className="search">
                <input type="text" placeholder="Enter a city name" spellCheck="false"/>
                <button><img src={BASE_URL+SEARCH}/></button>
              
            </div>

        </section>
    )
}
export default Card