import React from 'react'
import './feed.css';
import Story from './Story'
import Messagesender from './Messagesender';
import Post from './Post';
import Widgets from './widget'
import {UseGlobalContext} from './context'


function feed() {
    const { userinfo } = UseGlobalContext();
    const {displayName, photoURL} = userinfo;
    return (
        <div className='feed'>
            {/* Story Reel */}
            <div className='storyreel'>
            <Story profilesrc ='https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            title='Ajaya'/>
            <Story profilesrc='https://images.pexels.com/photos/3981337/pexels-photo-3981337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            title='Sunita'/>
            <Story profilesrc='https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            title='Ajaya'/>
            <Story profilesrc='https://images.pexels.com/photos/3981337/pexels-photo-3981337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            title='Sunita'/>
            <Story profilesrc='https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            title='Ajaya'/>
            <Story profilesrc='https://images.pexels.com/photos/3981337/pexels-photo-3981337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            title='Sunita'/>
            </div>

            <div className='message'>
                

            {/* Message */}
            <Messagesender/>
            <div className='posts'>
            <Post
            profilepic={photoURL}
                   image='https://images.pexels.com/photos/4218662/pexels-photo-4218662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              username='Ajaya'
               timestamp='1 hr ' 
               message='Whats Up Guyz i am currently very tired'
            />

            
                <Post
                 profilepic={photoURL}
                              image='https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              username='Ajaya'
               timestamp='1 hr ' 
               message='Whats Up Guyz i am currently very tired'
                />
            <Post/>


            </div>
            <div className='widjets'>
                <Widgets/>
            </div>
            </div>

        </div>
    )
}

export default feed

