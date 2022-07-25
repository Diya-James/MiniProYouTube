import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import "./Transcripts.css";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function Transcripts() {
  const location = useLocation();
  const navigate = useNavigate();
  var link = location.state.link;
  var data = location.state.tran;
  return (
    <div className="body-trans">
      <div className="navbar">
        <button className="back">
          {" "}
          <BsFillArrowLeftSquareFill onClick={() => navigate("/")} />
        </button>
        <button
          className="btn-sum"
          onClick={() => navigate("/summary", { state: { text: link } })}
        >
          Get Summary
        </button>
        <button
          className="btn-trans"
          onClick={() =>
            navigate("/transcripts", { state: { tran: data, link: link } })
          }
        >
          Get Transcripts
        </button>
      </div>

      <div>
        <div className="hd">Transcripts</div>
        <TextareaAutosize
          rows="100"
          cols="100000"
          id="Transcripts"
          value={location.state.tran}
          defaultValue="Loading...."
        />
      </div>
    </div>
  );
}

export default Transcripts;
