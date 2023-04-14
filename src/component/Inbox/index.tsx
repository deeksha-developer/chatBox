import React from 'react';
import Manual from '../../assets/icons/Manual.svg';
import './Inbox.css';

const Inbox = () => {
  return (
    <div className="main_inbox">
      <div className="txt_box">
        <h4 className="txt_head">Inbox</h4>
      </div>
      <div className="inbox_sec">
        <div>
          <input className="input_cls" type="text" placeholder="Search" />
        </div>
        <div className="manual_box">
          <img style={{ marginRight: '8px' }} src={Manual} />
          <h5 className="manual_head">Manual</h5>
        </div>
        <div className="txt_user">
          <div>
            <p style={{ background: '#FFCC9D' }} className="user_icon">
              RF
            </p>
          </div>
          <div className="user_inner">
            <h5 className="user_name">Robert Fox</h5>
            <p className="user_para">
              Hello, I need help with my sett...<span>1m</span>
            </p>
          </div>
        </div>
        <div className="txt_user">
          <div>
            <p className="icon_sec">FM</p>
          </div>
          <div className="user_inner">
            <h5 className="user_name">Floyd Miles</h5>
            <p className="user_para">
              Hello, I need help with my sett...<span>1m</span>
            </p>
          </div>
        </div>
      </div>
      <div className="sec_inbox">
        <div className="manual_box">
          <img style={{ marginRight: '8px' }} src={Manual} />
          <h5 className="manual_head">All</h5>
        </div>
        <div className="txt_user">
          <div>
            <p style={{ background: '#DFF2C2' }} className="user_icon">
              RF
            </p>
          </div>
          <div className="user_inner">
            <h5 className="user_name">Robert Fox</h5>
            <p className="user_para">
              Hello, I need help with my sett...<span>1m</span>
            </p>
          </div>
        </div>
        <div className="txt_user">
          <div>
            <p style={{ background: '#E7FAFE' }} className="user_icon">
              RF
            </p>
          </div>
          <div className="user_inner">
            <h5 className="user_name">Robert Fox</h5>
            <p className="user_para">
              Hello, I need help with my sett...<span>1m</span>
            </p>
          </div>
        </div>
        <div className="txt_user">
          <div>
            <p style={{ background: '#E7E8FE' }} className="user_icon">
              RF
            </p>
          </div>
          <div className="user_inner">
            <h5 className="user_name">Robert Fox</h5>
            <p className="user_para">
              Hello, I need help with my sett...<span>1m</span>
            </p>
          </div>
        </div>
        <div className="txt_user">
          <div>
            <p style={{ background: '#FFCC9D' }} className="user_icon">
              RF
            </p>
          </div>
          <div className="user_inner">
            <h5 className="user_name">Robert Fox</h5>
            <p className="user_para">
              Hello, I need help with my sett...<span>1m</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
