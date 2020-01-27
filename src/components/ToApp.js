import React, {useState, useEffect} from "react";
import axios from "axios";
import  InnerComp from "./InnerComp"

export default function ToApp() {
  const [napi, setNapi] = useState([]);

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => {
        // console.log(response);
        setNapi(response.data);
      })
      .catch(error => {
        console.log("This is why I didn't work:", error);
      });
  }, []);
  return (
    <div>
         <InnerComp 
          key={napi.url}
          title={napi.title}
          description={napi.explanation}
          date={napi.date} 
          img = {napi.hdurl}
        />
  </div>
  );
}