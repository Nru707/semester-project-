import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../../assest/images/logo.png';
import Button from '@mui/material/Button';
import '../Header/header.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import SearchBox from './Searchbox/search';
const Header =()=>{
    return(
        <>
        {/*.............................Header................................*/}
        <div className="header">
            {/* ...................logo........................................*/}
                    <div className="logo">
                        <Link to={'/'}><img src={Logo} alt='Logo'/></Link>
                    </div>
                    {/*header/..........drop down and search bar......*/}
                    <div className=' dropB'>
                        <Button className='idrop'>
                            <div className='info d-flex flex-column'>
                                 <span className='lable'> Location</span>
                                 <span className='name '>India <FaLocationDot />
                                </span>
                            </div>
                        </Button>
                    </div>
                    {/*..............................Searchbar...........abhi responsive nhi h search bar.......... */}
                   <div>
                   <select className='choose'> 
                            <option>Select</option>
                            <option>Books</option>
                            <option>Books</option>
                            <option>Books</option>
                            <option>Books</option>
                            <option>Books</option>
                        </select>
                   </div>
                    {/*search bar ka code yha se htaya hai */}
                    <SearchBox/>
                    {/*.............Account...................................................................................... */}
                <div className='account '>
                    <Button><FaRegUser /></Button>
                </div>
                <div className='cart'>
                    <div className='position-relative ml-2'>
                             <Button><FaOpencart /></Button>
                             <span className='count'>0</span>
                    </div>
                    </div>
                </div>
    

        {/*.........................Navbar......................................... */}
        </>
    )
}
export default Header;