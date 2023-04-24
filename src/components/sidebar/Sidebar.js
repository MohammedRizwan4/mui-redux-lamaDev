import React from 'react';
import './sidebar.css';
import { LineStyle, Timeline, TrendingUp, PersonOutlineRounded, StorefrontOutlined, AttachMoneyOutlined, BarChartOutlined, EmailOutlined, QuestionAnswerOutlined, ChatBubbleOutlineOutlined, WorkOutlineOutlined, Report } from '@mui/icons-material';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className='link'>
            <li className="sidebarListItem">
              <LineStyle className='sidebarIcon' />Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon' />Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className='link'>
              <li className="sidebarListItem">
                <PersonOutlineRounded className='sidebarIcon' />Users
              </li>
            </Link>
            <Link to="/products" className='link'>
            <li className="sidebarListItem">
              <StorefrontOutlined className='sidebarIcon' />Products
            </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyOutlined className='sidebarIcon' />Transaction
            </li>
            <li className="sidebarListItem">
              <BarChartOutlined className='sidebarIcon' />Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <EmailOutlined className='sidebarIcon' />Mail
            </li>
            <li className="sidebarListItem">
              <QuestionAnswerOutlined className='sidebarIcon' />Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineOutlined className='sidebarIcon' />Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineOutlined className='sidebarIcon' />Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />Analytics
            </li>
            <li className="sidebarListItem">
              <Report className='sidebarIcon' />Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
