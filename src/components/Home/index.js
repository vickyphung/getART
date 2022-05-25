import React from "react";
import { useState } from 'react';
import axios from 'axios'
import './style.css'

const Home = (props) => {

  const [art, setArt] = useState([])
  const [keyword, setKeywordSearch] = useState('')

  const fetchData = async () => {
    let response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${keyword}`)
    setArt(response.data)
  }
  console.log(art)
  return (
    <div className="">

      <div className="searchBar">
        <input className="inputText" onChange={(e) => setKeywordSearch(e.target.value)} />
        <button onClick={() => fetchData()} > Search </button>
      </div>

      <div className="results">
        {
          Object.keys(art).length > 0 ?
            art.objectIDs.map((artworks, index) => {
              return (

                <li className="itemized">
                  <p className="objID">{artworks}</p>

                  <button className="detailsBtn" onClick={() => {
                    props.setId(artworks)
                  }}
                  >Details</button>
                </li>
              )
            })
            : null
        }
      </div>

    </div>
  )
}

export default Home