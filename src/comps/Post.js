import React from 'react'
import './../App.css'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';

function Post({ profilePic, image, userName, time, message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar" />
                <div className="post_info">
                    <h3>{userName}</h3>
                    <p>{time}</p>
                </div>
            </div>
            
            <div className="post_body">
                <div className="message">
                    <p>
                        {message}
                    </p>
                </div>
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </div>

            <div className="post_bottom">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
