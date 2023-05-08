import React,{useState, useEffect} from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link, useParams } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function VanDetail(){
    const [vanData,setVanDate] = useState({});
    const params = useParams();
    console.log(params)
    const getVanData = async(id)=>{
        fetch(`/api/vans/${id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setVanDate(data.vans)
                })

    }
    useEffect(()=>{
        getVanData(params.id)
    },[params.id])
    return(
        <>
        <Navbar />
        <Link to="/vans" className="van-detail-return">⬅️ Back to all vans</Link>
        <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
        </Popup>
        <div key={vanData.id} className="van-detail" >
            <img src={vanData.imageUrl} alt={vanData.id}/>
        </div>
        <Footer origin="about"/>
        </>
    )
}

export default VanDetail;