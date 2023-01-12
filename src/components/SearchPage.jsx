import { Link } from "@mui/material";
import React from "react";
import Search from "./Search";
import "../styles/SearchPage.css";

//icons
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";

import NewspaperIcon from "@mui/icons-material/Newspaper";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// ===================

const SearchPage = () => {
  return (
    <>
      <div className="searchPage">
        <div className="searchPage_header">
          <Link to="/">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112__340.png"
              alt=""
            />
          </Link>

          <div className="searchPage_headerBody">
            <Search hideButtons />

            <div className="Option_conatiner">
              <div className="searchPage_options_Left">
                <div className="searchPage_options">
                  <SearchIcon />
                  <Link to="/all">All</Link>
                </div>

                <div className="searchPage_options">
                  <DescriptionIcon />
                  <Link to="/all">Description</Link>
                </div>

                <div className="searchPage_options">
                  <ImageIcon />
                  <Link to="/all">Image</Link>
                </div>

                <div className="searchPage_options">
                  <NewspaperIcon />
                  <Link to="/all">News</Link>
                </div>

                <div className="searchPage_options">
                  <LocationOnIcon />
                  <Link to="/all">Location</Link>
                </div>

                <div className="searchPage_options">
                  <SlideshowIcon />
                  <Link to="/all">Video</Link>
                </div>

                <div className="searchPage_options">
                  <MoreVertIcon />
                  <Link to="/all">More</Link>
                </div>
              </div>

              <div className="searchPage_option_Right">
                <div className="searchPage_options">
                  <Link to="/settings">Settings</Link>
                </div>

                <div className="searchPage_options">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
