import React from 'react';
import './topbar.css'
import { NotificationsNone ,Language,Settings, Lan} from '@mui/icons-material';
const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">lamadev</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />                        <span className="topIconBadge">2</span>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="data:image/png;base64,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" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
