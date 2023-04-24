import React from 'react';
import {ArrowDownward, ArrowUpward} from '@mui/icons-material'
import './FeaturedInfo.css'
const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$3,566</span>
            <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">
            Compared to last month
        </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$1,566</span>
            <span className="featuredMoneyRate">-7.4 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">
            Compared to last month
        </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$3,764</span>
            <span className="featuredMoneyRate">+4.4 <ArrowUpward className='featuredIcon'/></span>
        </div>
        <span className="featuredSub">
            Compared to last month
        </span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
