import React from 'react'
import './../App.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core'
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';


function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="logo" />
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header_middle">
                <div className="header_option">
                    <HomeIcon />
                </div>
                <div className="header_option">
                    <FlagIcon />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon />
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon />
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar />
                    <h4>Hello</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
