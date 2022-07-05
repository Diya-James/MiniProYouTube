import React , {useEffect , useState}from 'react'
import "./Summary.css"
import {useLocation} from 'react-router-dom';

function Summary() {
  const location = useLocation();
  const [sum , setsum] = useState('Loading.......')
  const [tran , settran] = useState('Loading......')

  const getData = async(result) => {
    const response = await fetch(`https://ytvideosummariser.herokuapp.com/api?url=${result}` );
    const data = await response.json();
    console.log(data)
    setsum(data.Message)
    settran(data.Transcripts)
  };

  getData(location.state.text);

  return (
    <div className="data-block">
    <div>Summary</div>
    <textarea rows="50" cols="50" id = "Transcripts" value = {sum} defaultValue = "Loading....">
        {location.state.sum}
    </textarea>

    <div>Transcripts</div>
    <textarea rows="50" cols="50" id = "Transcripts" value = {tran}>
    {tran}
    </textarea >
    </div>
  )
}

export default Summary
