import React, {useState, useEffect} from "react";
import axios from "axios";

const [potd, setPotd] = useState([]);
useEffect(() => {
    axios
      //.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);
function ToApp() {
    return (<div className="film">
    {potd.map(photo => {
      return (
          null
      );
    })}
  </div>
)}

export default ToApp;