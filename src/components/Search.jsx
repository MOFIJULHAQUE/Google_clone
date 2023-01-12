import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

import "../styles/search.css";
import { Button } from "@mui/material";

const Search = ({ hideButtons }) => {
  return (
    <>
      <form className="search">
        <div className="search_input">
          <SearchIcon />
          <input type="text" />
          <MicIcon />
        </div>

        {!hideButtons && (
          <div className="search_buttons">
            <Button type="submit" variant="outlined">
              Google Search
            </Button>

            <Button type="submit" variant="outlined">
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </form>
    </>
  );
};

export default Search;
