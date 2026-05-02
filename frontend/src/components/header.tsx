import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { setKeyword, clearKeyword } from "../redux/search";
import { useNavigate } from 'react-router-dom';

import './style/header2.css';
import logo from '../assets/logo/Logo.png';
import search from '../assets/header/search.svg';
import cartIcon from '../assets/header/cart.svg';

const Header: React.FC = () => {
    const [showSearch, setShowSearch] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="header-left">
                <img src={logo} alt="logo" className="header-logo" onClick={() => navigate('/home')}/>
            </div>
            <div className="header-right">
                {showSearch && (<input type="text" className="search-input" placeholder="Search products..."
                                       autoFocus onChange={(e) =>
                        dispatch(setKeyword(e.target.value.trim()))}/>
                )}
                <img src={search} alt="search" className="header-icons" onClick={() => {
                    setShowSearch(!showSearch);if (showSearch) dispatch(clearKeyword());}}/>
                <img src={cartIcon} alt="cart" className="header-icons" onClick={() => navigate('/cart')}/>
            </div>
        </div>
    );
};

export default Header;