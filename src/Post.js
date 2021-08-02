import { Avatar } from '@material-ui/core';
import React from 'react'
import './post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Post({profilepic, image, username, timestamp, message}) {
    return (
        <div className='post'>
            <div className='post_top'>
                <Avatar src={profilepic} 
                className='post_avatar'/>
                <div className='post_topinfo'>
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>

            </div>
            <div className='post_buttom'>
                    <p>{message}</p>

            </div>
            <div className='post_image'>
                    <img src={image}></img>

            </div>
            <div className='tab'>
                <div>
                    <ThumbUpIcon></ThumbUpIcon>
                    <p>Like</p>
                </div>
                <div>
                   <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                 <div>
                   <NearMeIcon/>
                    <p>Share</p>
                </div>
                 <div>
                   <AccountCircleIcon/>
                  <ExpandMoreIcon/>
                </div>

            </div>


           
            
        </div>
    )
}

export default Post
