import React from 'react'
import './../App.css'
import { Avatar } from '@material-ui/core'


function SidebarRow({ src, Icon, title}) {
    return (
        <div className="sidebar_row">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            
            <h4>
                {title}
            </h4>
        </div>
    )
}

export default SidebarRow
