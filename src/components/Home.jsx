import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import "../styles/Home.css";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_header">
          <div className="home_header_left">
            <p>About</p>
            <p>Store</p>
            <p>
              <Link to="/searchPage">
                <b>Search Page</b>
              </Link>
            </p>
          </div>

          <div className="home_header_right">
            <p>Gmail</p>
            <p>Images</p>
            <AppsIcon />
            <Avatar />
          </div>
        </div>

        <div className="home_body">
          <img
            src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png"
            alt=""
          />

          <div className="home_inputContainer">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
