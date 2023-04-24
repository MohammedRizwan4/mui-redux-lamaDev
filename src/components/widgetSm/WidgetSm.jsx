import React from 'react';
import './widgetSm.css';
import user from './user.png'
import {Visibility} from '@mui/icons-material';

const WidgetSm = () => {
  return (
     <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={user} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={user} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={user} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={user} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={user} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        
      </ul>
     </div>
  );
}

export default WidgetSm;
