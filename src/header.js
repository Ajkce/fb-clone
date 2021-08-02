import React from 'react'
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisorAccountSharpIcon
 from '@material-ui/icons/SupervisorAccountSharp';
import VideocamSharpIcon 
from '@material-ui/icons/VideocamSharp';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon 
from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Forum } from '@material-ui/icons';

function header() {
    
    return (
        <div className='header'>
            <div className='header_left'>
                <img src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'></img>
            <div className='header_input'>
                <SearchIcon/>
                <input type='text' placeholder='Search facebook'></input>
            </div>
            </div>
            

            <div className='header_middle'>
                <div className='header_option header_option--active '>
                    <HomeIcon />
                </div>
                 <div className='header_option'>
                    <FlagIcon />
                </div>
                 <div className='header_option'>
                    <SupervisorAccountSharpIcon />
                </div>
                 <div className='header_option'>
                    <VideocamSharpIcon />
                </div>
            </div>

            <div className='header_right'>
                <div className='header_info'>

                    <Avatar/>
                    <h4>Aj Kce</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                 <IconButton>
                    <ForumIcon/>
                </IconButton>
                 <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>

            </div>



        </div>
    )
}

export default header
