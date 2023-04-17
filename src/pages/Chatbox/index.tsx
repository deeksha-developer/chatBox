import React, { useState } from 'react';
import chat from '../../assets/icons/chat.svg';
import msgicon from '../../assets/icons/msgicon.svg';
import Detail from '../../component/Details';
import robot from '../../assets/icons/robot.svg';
import moment from 'moment';
import './Chatbox.css';

const Chatbox = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      senderId: 'sender',
      title: 'Cancel my subscription',
      para: 'I want to cancel my subscription and get a refund on my order',
      class: 'sendercls'
    },

    {
      id: 2,
      reciverId: 'reciver',
      title: 'Re: Cancel my subscription',
      para: '   Thanks for reaching out, Robert. You are currently on a 2 month treatment plan with a free first month so you will be able to cancel your plan through your account after your next shipment',
      class: 'recivercls'
    }
  ];
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
          {DUMMY_DATA.map((data, index) => {
            return (
              <div key={index}>
                <div className="chat_para">
                  <div className={data.class}>
                    <div>
                      <img
                        className="chat_img"
                        src={chat}
                        style={
                          data.senderId ? { background: '#F9F9F9' } : { background: '#f1ff9d' }
                        }
                      />
                    </div>
                    <p
                      className="ctbox_para"
                      style={data.senderId ? { background: '#F9F9F9' } : { background: '#f1ff9d' }}>
                      {data.title}
                      <span>
                        {moment().format('MMM DO')}
                        {moment().format('LT')}
                      </span>
                    </p>
                  </div>
                </div>
                {data.senderId ? (
                  <div className="chat_box">
                    <div className="chat_rf">
                      <p className="user_icon">RF</p>
                    </div>
                    <div
                      className="chatbox_para"
                      style={data.senderId ? { background: '#F9F9F9' } : { background: '#f1ff9d' }}>
                      <p>{data.para}</p>
                      I want to cancel my subscription and get a refund on <br />
                      my order.
                      <br />
                      <br /> Thanks,
                      <br /> Robert
                    </div>
                  </div>
                ) : (
                  <div className="chat_box1">
                    <div
                      className="chatbox_para1"
                      style={data.senderId ? { background: '#FFFFFF' } : { background: '#f1ff9d' }}>
                      <p>{data.para}</p>
                      You can log into your account here for more information:
                      https://dintle.com/account/login
                      <br />
                      Thanks! Dintle Team
                    </div>
                    <div className="chat_rf">
                      <p className="user_icon">RF</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* <div className="">
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
        </div> */}
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
