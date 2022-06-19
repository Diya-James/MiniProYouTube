import React , {useEffect , useState}from 'react'
import TextField from '@mui/material/TextField';
import { BrowserRouter, Routes, Route , useNavigate  } from "react-router-dom";
import "./App.css"
import Summary from './Summary';

function App() {

  const navigate = useNavigate();
  const [text, settext] = useState('')
  const [sum , setsum] = useState('Loading.......')
  const [tran , settran] = useState('Loading......')

  useEffect(() => {
  }, []);

  const Input = (e) => 
  {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name , value);
    settext(value)
    console.log(value)
  }

  
  const handleSubmit = (e) => {
      const result = text;
      e.preventDefault();
      getData(result);
      console.log("The Result : " , result)
  }

  const getData = async(result) => {

    const response = await fetch(`https://ytvideosummariser.herokuapp.com/api?url=${result}` );
    const data = await response.json();
    console.log(data)
    setsum(data.Message)
    settran(data.Transcripts)
  };

  return (
      <div className="App">

      <h1>YouTube Video Summariser</h1>
      <form onSubmit = {e => { handleSubmit(e) }}>
      <TextField id="outlined-basic" label="YouTube Link" variant="outlined" onChange={Input}/>
      </form>

      <button onClick = {() => { navigate("./summary" , { state : {sum : sum}}) } }> Summary</button>
      <button onClick = {() => { navigate("/transcripts" , { state : {tran : tran}})}}> Transcripts</button>
      {/* <textarea rows="50" cols="50" id = "Transcripts" value={tran}>
        {tran}
      </textarea >

      <textarea rows="50" cols="50" id = "Message"value={sum}>
        {sum}
      </textarea > */}

    </div>

  )
}

export default App