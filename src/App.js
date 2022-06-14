import React , {useEffect , useState}from 'react'
import TextField from '@mui/material/TextField';
import "./App.css"

function App() {

  
  const [text, settext] = useState('')
  const [sum , setsum] = useState('')
  const [tran , settran] = useState('')

  useEffect(() => {
    getData();
  }, []);

  const Input = (e) => 
  {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name , value);
    settext(value)

  }

  const getData = async() => {

    const response = await fetch('https://ytvideosummariser.herokuapp.com/api?url=https://www.youtube.com/watch?v=bz7yYu_w2HY' );
    // console.log(response)
    const data = await response.json();
    console.log(data)
    setsum(data.Message)
    settran(data.Transcripts)
  };

  return (
    <div className="App">

      <h1>YouTube Video Summariser</h1>
      <TextField id="outlined-basic" label="YouTube Link" variant="outlined" onChange={Input}/>

      <textarea rows="50" cols="50" id = "Transcripts" value={tran}>
        {tran}
      </textarea >

      <textarea rows="50" cols="50" id = "Message"value={sum}>
        {sum}
      </textarea >

    </div>
  )
}

export default App