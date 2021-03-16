import { Avatar } from '@material-ui/core';
import React from 'react'
import "./SidebarRow.css";

function SidebarRow({src, Icon, title  /* icon is 'i' in caps as we are using a component directly as a prop */}) {
    return (
        <div className="sidebarRow">
{  src && <Avatar src={src} /> }
{Icon && <Icon />}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow