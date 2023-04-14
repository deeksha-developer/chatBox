import React from 'react';
import logout from '../../assets/icons/logout.svg';
import box from '../../assets/icons/box.svg';
import star from '../../assets/icons/star.svg';
import tool from '../../assets/icons/tool.svg';
import setting from '../../assets/icons/setting.svg';
import './Sidebar.css';

const sidedetail = [
  { id: 2, iconSrc: box },
  { id: 3, iconSrc: tool },
  { id: 4, iconSrc: setting },
  { id: 4, iconSrc: logout }
];

const Sidebar = () => {
  return (
    <div className="sidebar_cls">
      <div className="icon_img">
        <img className="logo_img" src={star} />
      </div>
      {sidedetail.map((text) => {
        return (
          <div key={text.id}>
            <img className="img_icon" src={text.iconSrc} />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
