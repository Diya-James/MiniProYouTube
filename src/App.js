import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Summary from "./Summary";
import Particles from './components/Particle';
import logo from './screen.gif'
function App() {
  const navigate = useNavigate();
  const [text, settext] = useState("");

  useEffect(() => {}, []);

  const Input = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    settext(value);
    console.log(value);
  };

  // const handleSubmit = () => {
  //     const result = text;
  //     getData(result);
  //     console.log("The Result : " , result)
  // }

  // const getData = async(result) => {

  //   const response = await fetch(`https://ytvideosummariser.herokuapp.com/api?url=${result}` );
  //   const data = await response.json();
  //   console.log(data)
  //   // setsum(data.Message)
  //   settran(data.Transcripts)
  // };

  return (
    <React.Fragment>
    <Particles/>
    
    <div className="App">
    
    <br/>
      <h1 className="Heading">YouTube Video Summariser</h1>

      <div className="wrapper">
        <TextField
          inputProps={{ style: { fontFamily: 'Arial', color: 'black'}}}
          className="textbox"
          id="outlined-basic"
          label="YouTube Link"
          variant="outlined"
          onChange={Input}
        />
      </div>

      <button
        className="button"
        onClick={() => {
          {
            navigate("./summary", { state: { text: text } });
          }
        }}
      >
        {" "}
        Get Summary
      </button>
      <br/>
      <img src={logo} alt="loading..." height={490} />
    </div>
    
    </React.Fragment>
  );
}

export default App;
