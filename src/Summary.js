import React from 'react'
import TextField from '@mui/material/TextField';
import {useLocation} from 'react-router-dom';

function Summary() {
  const location = useLocation();

  return (
    <>
    <div>Summary</div>
    <textarea rows="50" cols="50" id = "Transcripts" value = {location.state.sum}>
        {location.state.sum}
    </textarea >

    </>
  )
}

export default Summary