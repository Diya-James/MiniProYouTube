import React, { useEffect, useState } from "react";
import "./Summary.css";
import { useLocation } from "react-router-dom";

function Summary() {
  const location = useLocation();
  const [sum, setsum] = useState("Loading.......");
  const [tran, settran] = useState("Loading......");
  const [translation, settranslation] = useState("Loading......");
  const [rangeval, setRangeval] = useState(1.7);
  const [rangevalp, setRangevalp] = useState(2);
  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg) => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    var voices
    setTimeout(() => {
      voices = window.speechSynthesis.getVoices();
    }, 50);

    msg.pitch = rangevalp;
    msg.rate = rangeval;
    //msg.voice = voices.filter(function(voice) { return voice.name == 'Microsoft Zira Desktop - English (United States)'; })[0];
    msg.text = sum;
    //msg.voice = voices[3]
    //msg.voice = voices.filter(function(voice) { return voice.name == 'Microsoft Zira Desktop - English (United States)'; })[0];
    window.speechSynthesis.speak(msg);
  };

  const speechPause = () => {
    window.speechSynthesis.pause();
  };

  const speechResume = () => {
    window.speechSynthesis.resume();
  };


  const getData = async (result) => {
    const response = await fetch(
      `https://ytvideosummariser.herokuapp.com/api?url=${result}`
    );
    const data = await response.json();
    //console.log(data);
    setsum(data.Message);
    settran(data.Transcripts);
    try{
      const response1 = await fetch(
        `https://yttranslation.herokuapp.com/api?dest=es&text=${sum}`
      );
      const data1 = await response1.json();
      console.log(data1.Tranlated)
      settranslation(data1.Translated)
    }
    catch{
      console.error();
    }
  };

 

  getData(location.state.text);
  

  return (
    <div>
      <div className="data-block">
        <div className="labels">Summary</div>
        <div class="container">
          <div class="textarea_styles">
            <textarea
              rows="50"
              cols="50"
              id="Transcripts"
              value={sum}
              defaultValue="Loading...."
            >
              {location.state.sum}
            </textarea>
          </div>
        </div>
        <div className="labels">Transcripts</div>
        <div class="container">
          <div class="textarea_styles">
            <textarea rows="50" cols="50" id="Transcripts" value={tran}>
              {tran}
            </textarea>
          </div>
        </div>
        <br />
      </div>
      <div id="rate-control">
        <label for="rate">Rate:</label>
        <input
          id="typeinp"
          type="range"
          onChange={(event) => setRangeval(event.target.value)}
          min="0.5"
          max="3"
          defaultValue="1.7"
          step="0.1"
        />
      </div>
      <div id="rate-control">
        <label for="rate">Pitch:</label>
        <input
          id="typeinp"
          type="range"
          onChange={(event) => setRangevalp(event.target.value)}
          min="0.5"
          max="3"
          defaultValue="2"
          step="0.1"
        />
      </div>
      <button className="btn" onClick={() => speechHandler(msg)}>
        <span className="btn-content">Speak</span>
      </button>

      <button className="btn" onClick={() => speechPause()}>
        <span className="btn-content">Pause</span>
      </button>

      <button className="btn" onClick={() => speechResume()}>
        <span className="btn-content">Resume</span>
      </button>
    </div>
  );
}

export default Summary;
