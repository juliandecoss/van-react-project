import React,{useEffect, useState} from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";


function Vans() {
    const [vans,setVans] = useState([]);
    useEffect(()=>{
        const getData = async()=>{
            fetch('/api/vans')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setVans(data.vans)
                })
        }
        getData()
    },[])
    const vanElements = vans.map(van => (
        <Link to={`/vans/${van.id}`} className="link-to-van-id">
        <div key={van.id} className="van-tile" >
            <img src={van.imageUrl} alt={van.id}/>
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
        </Link>
    ))
    return (
      <div>
        <Navbar />
        <div>
            <h1>Explore our van options</h1>
            <div>
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
                <a href="https://google.com">Clear filters</a>
            </div>
            <div className="van-list-container">
                <div className="van-list">
                    {vanElements}
                </div>
            </div>      
        </div>
        <Footer origin="about"/>
      </div>
    );
  }
  
  export default Vans;