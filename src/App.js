import { Route, Routes, useNavigate } from 'react-router-dom';
import Art from './components/Art'
import Home from './components/Home'
import './App.css';
import { useState } from 'react';


function App() {


  const [artId, setArtId] = useState('')
  const navigate = useNavigate()
  
  const setIdAndLink = (id) => {
    setArtId(id)
    navigate('/art')
  }

  return (

    <div className='App'>
      <div className='head'>
      <h2>The MET Museum's Open Access Art Collection</h2>
      <p></p>
      </div>
      <div className="content">

        <div className='search'>
        <Routes>
          <Route path="/" element={<Home  setId={setIdAndLink}/>} />
        </Routes>
        </div>

        <div className='detail'>
          {/* <Art artId={artId} /> */}
          <Routes>
            <Route path="/art" element={<Art artId={artId} />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;
