import { Avatar } from '@material-ui/core'
import React from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import './messagesender.css';
import {useState, useEffect} from 'react';
import { StayCurrentLandscape } from '@material-ui/icons';


function Messagesender() {
const handleSubmit = (e) => {
e.preventDefault();
setPost([...post, {message, image}]);
setMessage('');
setImage('');
console.log(post);
}


const [message, setMessage] = useState('');
const [image, setImage] = useState('');
const [post, setPost] = useState([]);

    return (
        <div className='messagesender'>
            <div className='messagesender_top'>
                <Avatar src='https://media.istockphoto.com/photos/hacker-dark-face-using-laptop-picture-id1133604495?k=6&m=1133604495&s=612x612&w=0&h=Q1F9J21XKx4avEm4z5O1CsFC7i6CbvxDpQSTd9Gg5xs='/>
            <form >
                <input className='message_input'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                 type='text' placeholder="Whats on your mind today">
                </input>
                <input  value={image}
                onChange={(e) => setImage(e.target.value)}
                type='text' placeholder='image URL (optional)'>    
                </input>
            <button type='submit' onClick={handleSubmit}></button>
            </form>
            
            </div>

            <div className='messagesender_bottom'>
                <div className='live_video'>
                    <VideoCallIcon/>
                    <h4>Live Video</h4>
                </div>
                 <div className='photo'>
                    <AddPhotoAlternateIcon/>
                    <h4>Photo / Video</h4>
                </div>
                 <div className='feeling'>
                    <EmojiEmotionsIcon/>
                    <h4>Feeling / Activity</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Messagesender
