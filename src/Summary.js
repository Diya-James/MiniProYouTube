import React, { useEffect, useState } from "react";
import "./Summary.css";
import { useLocation } from "react-router-dom";

function Summary() {
  const location = useLocation();
  const [sum, setsum] = useState("Loading.......");
  const [tran, settran] = useState("Loading......");
  const [rangeval, setRangeval] = useState(null);
  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg) => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    msg.pitch = 2.5;
    msg.rate = rangeval;
    //msg.voice = voices.filter(function(voice) { return voice.name == 'Microsoft Zira Desktop - English (United States)'; })[0];
    msg.text = sum;
    window.speechSynthesis.speak(msg);
  };

  const speechPause = () => {
    window.speechSynthesis.pause();
  };

  const speechResume = () => {
    window.speechSynthesis.resume();
  };

  setTimeout(() => {
    console.log(window.speechSynthesis.getVoices());
  }, 50);

  const getData = async (result) => {
    const response = await fetch(
      `https://ytvideosummariser.herokuapp.com/api?url=${result}`
    );
    const data = await response.json();
    console.log(data);
    setsum(data.Message);
    settran(data.Transcripts);
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
          defaultValue="2"
          step="0.1"
        />
      </div>
      <br />
      <button onClick={() => speechHandler(msg)}>SPEAK</button>
      <br />
      <button onClick={() => speechPause()}>PAUSE</button>
      <br />
      <button onClick={() => speechResume()}>RESUME</button>
      <br />
      <br />
    </div>
  );
}

export default Summary;
