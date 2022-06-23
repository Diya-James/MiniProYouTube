import React , {useEffect , useState}from 'react'
import TextField from '@mui/material/TextField';
import {useLocation} from 'react-router-dom';

function Transcripts() {
  const location = useLocation();
  const [tran , settran] = useState('Loading......')

  const getData = async(result) => {

    const response = await fetch(`https://ytvideosummariser.herokuapp.com/api?url=${result}` );
    const data = await response.json();
    console.log(data)
    settran(data.Transcripts)
  };

  getData(location.state.text);

  return (
    <>
    <div>Transcripts</div>
    <textarea rows="50" cols="50" id = "Transcripts" value = {tran}>
    {tran}
    </textarea >

    </>
  )
}

export default Transcripts
