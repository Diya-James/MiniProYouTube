import React, { useEffect, useState } from "react";
import "./Summary.css";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Summary() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sum, setsum] = useState("Loading.......");
  const [tran, settran] = useState("Loading......");
  const [translation, settranslation] = useState("Loading......");
  const [rangeval, setRangeval] = useState(1.7);
  const [rangevalp, setRangevalp] = useState(2);
  const [selects, setSelects] = useState();

  const getData = async (result) => {
    const response = await fetch(
      `https://ytvideosummariser.herokuapp.com/api?url=${result}`
    );
    const data = await response.json();

    setsum(data.Message);
    settran(data.Transcripts);
  };

  useEffect(() => {
    getData(location.state.text);
  }, []);

  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg) => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    var voices;
    setTimeout(() => {
      voices = window.speechSynthesis.getVoices();
    }, 50);

    msg.pitch = rangevalp;
    msg.rate = rangeval;
    msg.text = sum;
    window.speechSynthesis.speak(msg);
  };

  const speechPause = () => {
    window.speechSynthesis.pause();
  };

  const speechResume = () => {
    window.speechSynthesis.resume();
  };

  var link = location.state.text;
  console.log(link);

  const handleChange = () => {
    console.log("Clicked !!");
  };

  const handleChangeCode = async (e) => {
    var dict = {
      Chinese: "zh-cn",
      Dutch: "nl",
      Czech: "cs",
      French: "fr",
      English: "en",
      Arabic: "ar",
      German: "de",
      Greek: "el",
      Gujarati: "gu",
      Hindi: "hi",
      Japanese: "ja",
      Indonesian: "id",
      Irish: "ga",
      Italian: "it",
      Kannada: "kn",
      Korean: "ko",
      Latin: "la",
      Lithuanian: "lt",
      Malay: "ms",
      Malayalam: "ml",
      Marathi: "mr",
      Mangolian: "mn",
      Nepali: "ne",
      Odia: "or",
      Persian: "fa",
      Polish: "pl",
      Portuguese: "pt",
      Punjabi: "pa",
      Romanian: "ro",
      Russian: "ru",
      Serbian: "sr",
      Spanish: "es",
      Swedish: "sv",
      Tamil: "ta",
      Telugu: "te",
      Thai: "th",
      Turkish: "tr",
      Ukrainian: "uk",
      Urdu: "ur",
      Uzbek: "uz",
      Viatnamese: "vi",
      Albanian: "sq",
      Bosnian: "bs",
      Bulagarian: "bg",
    };

    setSelects(e.target.value);
    const value = e.target.value;
    console.log(value);
    console.log(dict[value]);
    var code = dict[value];
    try {
      const response1 = await fetch(
        `https://yttranslation.herokuapp.com/api?dest=${code}&text=${sum}`
      );
      const data1 = await response1.json();
      console.log(data1.Tranlated);
      settranslation(data1.Translated);
      setsum(data1.Tranlated);
    } catch {
      console.error();
    }
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <button
          className="btn-sum"
          class="active"
          onClick={() => navigate("/summary", { state: { text: { link } } })}
        >
          Get Summary
        </button>
        <button
          className="btn-trans"
          onClick={() =>
            navigate("/transcripts", { state: { tran: tran, link: link } })
          }
        >
          Get Transcripts
        </button>
      </div>

      <br />
      <br />
      <div className="sum-page">
        <div> Summary </div>
        <div className="content">
          <div className="left-flex">
            <div className="rate-pitch">
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
            </div>

            <div className="speech-controller">
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

            <select value={selects} onChange={handleChangeCode}>
              <option></option>
              <option>Chinese</option>
              <option>Dutch</option>
              <option>Czech</option>
              <option>French</option>
              <option>English</option>
              <option>Arabic</option>
              <option>German</option>
              <option>Greek</option>
              <option>Gujarati</option>
              <option>Hindi</option>
              <option>Japanese</option>
              <option>Indonesian</option>
              <option>Irish</option>
              <option>Italian</option>
              <option>Kannada</option>
              <option>Korean</option>
              <option>Latin</option>
              <option>Lithuanian</option>
              <option>Malay</option>
              <option>Malayalam</option>
              <option>Marathi</option>
              <option>Mangolian</option>
              <option>Nepali</option>
              <option>Odia</option>
              <option>Persian</option>
              <option>Polish</option>
              <option>Portuguese</option>
              <option>Punjabi</option>
              <option>Romanian</option>
              <option>Russian</option>
              <option>Serbian</option>
              <option>Spanish</option>
              <option>Swedish</option>
              <option>Tamil</option>
              <option>Telugu</option>
              <option>Thai</option>
              <option>Turkish</option>
              <option>Ukranian</option>
              <option>Urdu</option>
              <option>Uzbek</option>
              <option>Viatnamese</option>
              <option>Albanian</option>
              <option>Bosnian</option>
              <option>Bulagarian</option>
            </select>
          </div>
          <div className="main">
            <textarea
              rows="100"
              cols="100"
              id="Transcripts"
              value={sum}
              defaultValue="Loading...."
            >
              {sum}
            </textarea>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Summary;
