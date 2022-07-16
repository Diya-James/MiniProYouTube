import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./Transcripts.css"

function Transcripts() {
    const location = useLocation();
    const navigate = useNavigate();
    var link = location.state.link;
    var data = location.state.tran;
  return (
    <div className = "body-trans">

    <div className = "summ-trans-container">
    <button className = "sum-btn" onClick={() => navigate("/summary", { state: { text: link } })}>Get Summary</button>
    <button className = "trans-btn" onClick={() => navigate("/transcripts", { state: { tran: data , link:link} })}>Get Transcripts</button>
    </div>
    <div>Transcripts</div>
    <div class="textarea_styles">
            <textarea
              rows="50"
              cols="50"
              id="Transcripts"
              value={location.state.tran}
              defaultValue="Loading...."
            >
              {location.state.tran}
            </textarea>
          </div>

    </div>
  )
}

export default Transcripts