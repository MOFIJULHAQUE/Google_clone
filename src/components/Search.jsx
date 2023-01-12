import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

import "../styles/search.css";
import { Button } from "@mui/material";
// import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons }) => {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");

  const history = useNavigate();

  const search = (e) => {
    e.preventDefault();
    // alert(input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history("/searchPage");
  };
  return (
    <>
      <form className="search">
        <div className="search_input">
          <SearchIcon />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <MicIcon />
        </div>

        {!hideButtons ? (
          <div className="search_buttons">
            <Button type="submit" variant="outlined" onClick={search}>
              Google Search
            </Button>

            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        ) : (
          <div className="search_buttons">
            <Button type="submit" variant="outlined" onClick={search} style={{display:"none"}}>
              Google Search
            </Button>
          </div>
        )}
      </form>
    </>
  );
};

export default Search;
