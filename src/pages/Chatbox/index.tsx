import React, { useState } from 'react';
import chat from '../../assets/icons/chat.svg';
import msgicon from '../../assets/icons/msgicon.svg';
import Detail from '../../component/Details';
import robot from '../../assets/icons/robot.svg';
import './Chatbox.css';

const Chatbox = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="chat_section">
      <div className="main_chat">
        <div className="inner_chat">
          <h4 className="chat_title">Robert Fox</h4>

          <button onClick={toggleMenu} className="chat_btn">
            <img className="chat_img" src={msgicon} />
            Switch to manual
          </button>
        </div>
        <div className="chat_txt">
          <p className="chat_para">
            <img className="chat_img" src={chat} />
            Cancel my subscription<span> Apr 5 · 10:35am</span>
          </p>
          <div className="chat_box">
            <div className="chat_rf">
              <p style={{ background: '#FFCC9D' }} className="user_icon">
                RF
              </p>
            </div>
            <p className="chatbox_para">
              I want to cancel my subscription and get a refund on <br />
              my order.
              <br />
              <br /> Thanks,
              <br /> Robert
            </p>
          </div>
        </div>
        <div className="">
          <p className="chat_pra">
            <img className="chat_img" src={chat} />
            Re: Cancel my subscription<span> Apr 5 · 10:35am</span>
          </p>
          <div className="chat_boxs">
            <p className="chatbox_para2">
              Thanks for reaching out, Robert.
              <br />
              <br />
              You are currently on a 2 month treatment plan with a free first month so you will be
              able to cancel your plan through your account after your next shipment.
              <br />
              <br />
              You can log into your account here for more information:
              https://dintle.com/account/login
              <br />
              Thanks! Dintle Team
            </p>
            <div className="chat_robo">
              <p style={{ background: 'black' }} className="user_icon">
                <img src={robot} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="chat_detail">
        {openMenu ? (
          <div>
            <Detail />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Chatbox;
