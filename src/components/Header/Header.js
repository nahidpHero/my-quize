import React from 'react';
import './Header.css'
import img1 from '../../images/image.jpg'
const Header = () => {
    return (
        <div>
            <div>
                <img className='container' src={img1} alt="" />
            </div>
        </div>
    );
};
export default Header;