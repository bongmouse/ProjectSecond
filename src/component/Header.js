import React from 'react';
import "../css/Header.css";
import SearchIcon from '@mui/icons-material/Search';
function Header(props) {
    return (
        <div className='header'>
            <img className='header_logo' src='image/main.png'/>
        
            <div className='header_search'>
                <input className='header_input' type="text"/>
                <SearchIcon className='header_searchIcon'/>
            </div>

            <div className='header_nav'>
                <div className='header_option'>
                    <span>회원가입</span>
                </div>

                <div className='header_option'>
                    <span>회원가입rrr</span>
                </div>

                <div className='header_option'>
                    <span>회원가입</span>
                </div>
            </div>
        </div>
    );
}

export default Header;