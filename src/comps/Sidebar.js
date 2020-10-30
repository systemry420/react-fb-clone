import { ExpandMoreOutlined } from '@material-ui/icons'
import React from 'react'
import "./../App.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';


// object that handles sidebar content and icons
const data = [
    {
        Icon: LocalHospitalIcon,
        title: "COVID-19 Information center"
    },
    {
        Icon: EmojiFlagsIcon,
        title: "Pages"
    },
    {
        Icon: PeopleIcon,
        title: "Friends"
    },
    {
        Icon: ChatIcon,
        title: "Messenger"
    },
    {
        Icon: StorefrontIcon,
        title: "Marketplace"
    },
    {
        Icon: VideoLibraryIcon,
        title: "Videos"
    },
    {
        Icon: ExpandMoreOutlined,
        title: "Marketplace"
    },
]

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow 
                src={'a.jpg'}
                title={'Name Name'}
            />

            {data.map((item, i)=>{
                return <SidebarRow {...item} key={i} />
            })}
        </div>
    )
}

export default Sidebar
