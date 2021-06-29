import React from 'react';
import "./Header.css";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Header = () => {
  return (
    <div className="container">
      <div className="carousel-wrapper">
        <span id="item-1"></span>
        <span id="item-2"></span>
        <span id="item-3"></span>
        <div className="carousel-item item-1">
          <h2>Guardians (2017) - Phim siêu anh hùng Nga</h2>
          <p>Người Nga thử sức trong dòng phim siêu anh hùng với “Guardians”, mang đến nhiều trailer ấn tượng, để rồi gây ra thất vọng nặng nề cho khán giả bởi sự yếu kém về nhiều mặt.</p>
          <Button
            className="youtube-icon"
            variant="contained"
            startIcon={<YouTubeIcon />}
            color="secondary"
            target="__blank"
           
            href="https://www.youtube.com/watch?v=IYcvwcNpz_g&t=11s"
          >
            Trailer
          </Button>
          <a className="arrow arrow-prev" href="#item-3"></a>
          <a className="arrow arrow-next" href="#item-2"></a>
        </div>

        <div className="carousel-item item-2">
          <h2>Item 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam erat volutpat.</p>
          <a className="arrow arrow-prev" href="#item-1"></a>
          <a className="arrow arrow-next" href="#item-3"></a>
        </div>

        <div className="carousel-item item-3">
          <h2>Item 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam erat volutpat.</p>
          <a className="arrow arrow-prev" href="#item-2"></a>
          <a className="arrow arrow-next" href="#item-1"></a>
        </div>
      </div>
    </div>

  );
};

export default Header;
