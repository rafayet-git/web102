import { useState } from 'react'
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [blacklist, setBlacklist] = useState([]);
  const [attributes, setAttributes] = useState({
    name: "",
    origin: "",
    life_span: "",
    weight_metric: "",
  });

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    if (json[0].url == null ) {
      alert("Oops! Something went wrong with that query, let's try again!")
    } else if (blacklist.includes(json[0].breeds[0].origin)){
      makeQuery();
    } else {
      setCurrentImage(json[0].url);
      setAttributes({
        name: json[0].breeds[0].name,
        origin: json[0].breeds[0].origin,
        life_span: `${json[0].breeds[0].life_span} yrs`,
        weight_metric: `${json[0].breeds[0].weight.metric} kg`,
      });
    }
  }
  const makeQuery = () => {
    let query = `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${ACCESS_KEY}`;
    callAPI(query).catch(console.error);
  }
  
  const handleBlacklistAdd = () => {
    setBlacklist((prev) => [...prev, attributes.origin]);
  }
  const handleBlacklistRemove = (index) => {
    let newBlacklist = [...blacklist];
    newBlacklist.splice(index, 1);
    setBlacklist(newBlacklist);
  }
  return (
    <>
      <div className="whole-page">
        <h1> Cats!!! </h1>
        <h2> Get a picture of a cat and its attributes</h2>
        {currentImage ? (
          <>
          <div>
            <button>{attributes.name}</button>
            <button id='clickable' onClick={handleBlacklistAdd}>{attributes.origin} </button>
            <button>{attributes.life_span}</button>
            <button>{attributes.weight_metric}</button>
          </div>
          <img
            className="cat-image"
            src={currentImage}
            alt="Cat returned"
            style={{ width: "300px", height: "300px", margin: "10px" }}
          />
          </>
      ) : (
        <div> </div>
      )}
        <div>
          <button id='clickable' onClick={makeQuery}>Get Cat!</button>
        </div>
        <h2> Blacklisted origins: </h2>
        <div>
          {blacklist.map((origin, index) => (
            <button id='clickable' key={index} onClick={() => handleBlacklistRemove(index)}>
              {origin}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
