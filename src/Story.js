import { Avatar } from '@material-ui/core'
import React from 'react'
import './story.css'

function story({image, profilesrc, title}) {
    return (
        <div className='story' style={ {backgroundImage: `url(${profilesrc})`}}>
           <Avatar className='story_avatar' src={profilesrc}/>
           <h4>{title}</h4>
          
        </div>
    )
}

export default story
