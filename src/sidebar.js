import React from 'react'
import SidebarRow from './sidebarRow'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import GroupWorkRoundedIcon from '@material-ui/icons/GroupWorkRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import AvTimerRoundedIcon from '@material-ui/icons/AvTimerRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';

function sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src="https://media.istockphoto.com/photos/hacker-dark-face-using-laptop-picture-id1133604495?k=6&m=1133604495&s=612x612&w=0&h=Q1F9J21XKx4avEm4z5O1CsFC7i6CbvxDpQSTd9Gg5xs=" 
            title="Ajaya"/>
            <SidebarRow Icon={LocalHospitalRoundedIcon} title="Covid-19 
            Information Center"/>
            <SidebarRow Icon={PeopleOutlineIcon}
            title='Friends'/>
             <SidebarRow Icon={GroupWorkRoundedIcon}
            title='Groups'/>
            <SidebarRow Icon={VideoLibraryRoundedIcon}
             title="Videos"/>
             <SidebarRow Icon={StorefrontRoundedIcon}
            title='MarketPlace'/>
             <SidebarRow Icon={AvTimerRoundedIcon}
            title='Memories'/>
            
        </div>
    )
}

export default sidebar
