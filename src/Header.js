import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
    return (
      <nav className="header">
        {/* left logo */}
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        {/*Search Box*/}
        <div className="header__search">
          <input type="text" className="header__searchInput"></input>
          <SearchIcon className="header__searchIcon" />
        </div>

        {/*3 links */}
        <div className="header__nav">
          {/* 1st link*/}
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">hello,</span>
              <span className="header__optionLineTwo">sign in</span>
            </div>
          </Link>

          {/* 2st link*/}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* 3st link*/}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>

          {/* 4st link*/}
          <Link to="/checkout" className="header__optionBasket">
            {/* Shopping basket icon*/}
            <ShoppingBasketIcon className="header__optionLineTwo" />
            <span className="header__basketCount">0</span>
          </Link>
        </div>
      </nav>
    );
}

export default Header
