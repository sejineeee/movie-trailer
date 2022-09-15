import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import '../../styles/header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="inner">
        <div className="left-container">
          <h1 className="logo">SEJIN's MOVIE</h1>
          <div className="search-container">
            <input type="text" placeholder="영화를 검색해보세요." />
            <FaSistrix className="search-icon" size="22" />
          </div>
        </div>
        <div className="util">
          <AiOutlineHome
            className="home-icon"
            color="fff"
            weight="bold"
            size="30"
          />
          <div className="now-movie">NOW PLAYING</div>
          <div className="coming-movie">COMING SOON</div>
          <div className="top-rated-movie">TOP RATED</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
