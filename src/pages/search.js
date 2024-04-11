import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./Search.css";

function search() {
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search_inputIcon" />
        <input />
        <MicIcon />
      </div>
    </div>
  );
}

export default search;
