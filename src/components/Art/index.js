import React from "react";
import './style.css'
import axios from 'axios'
import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";

const Art = (props) =>{

    const [artData, setArtData] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async () => {
            if (props.artId) {
            const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.artId}`)
            setArtData(response.data)
            } else {
                navigate('/')
            }
        }
        fetchData();
    }, [props.artId])

console.log(artData)

    return (
        <div className="artDetails">
            <div className="artworkInfo">
                <div><h3>{artData.artistDisplayName}</h3></div>
                <div>{artData.title}</div>
                <div>{artData.objectDate}</div>
                <div>{artData.medium}</div>
                <div>{artData.objectURL}</div>
            </div>    
            <div className="image">
                <img src={artData.primaryImageSmall} alt={artData.title} />
            </div>

        </div>
    )
}

export default Art