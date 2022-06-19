import React from 'react'
import TextField from '@mui/material/TextField';
import {useLocation} from 'react-router-dom';

function Transcripts() {
  const location = useLocation();
  return (
    <>
    <div>Transcripts</div>
    <textarea rows="50" cols="50" id = "Transcripts" value = {location.state.tran}>
    {location.state.tran}
    </textarea >

    </>
  )
}

export default Transcripts