import React, { useState } from 'react';
import './Detail.css';
const Detail = () => {
  const [close, setClose] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [openLead, setOpenlead] = useState(false);
  const [openTag, setOpenTag] = useState(false);
  const [openRecent, setOpenRecent] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const toggleLead = () => {
    setOpenlead(!openLead);
  };
  const toggletag = () => {
    setOpenTag(!openTag);
  };
  const toggleRecent = () => {
    setOpenRecent(!openRecent);
  };
  const toggleClose = () => {
    setClose(!setClose);
  };

  return (
    <div className="main_box">
      <div className="txt_box">
        <h4 className="txt_head">Details</h4>

        <span
          onClick={toggleClose}
          style={{ paddingTop: '20px' }}
          className="material-symbols-outlined">
          close
        </span>
      </div>
      {close ? (
        <div>
          <div className="dtl_list">
            <p>
              Assignee
              <span
                style={{ paddingLeft: '70px', fontSize: '13px' }}
                className="material-symbols-outlined">
                account_circle
              </span>
              <span>unassigned</span>
            </p>
            <p>
              Team{' '}
              <span
                style={{ paddingLeft: '92px', fontSize: '13px' }}
                className="material-symbols-outlined">
                account_circle
              </span>
              <span>unassigned</span>
            </p>
            <p>
              link <span>create link</span>
            </p>
          </div>
          <div className="main_att">
            <h3 className="txt_att" onClick={toggleMenu}>
              Attributes
              {openMenu ? (
                <span className="material-symbols-outlined">arrow_drop_up</span>
              ) : (
                <span className="material-symbols-outlined">arrow_drop_down</span>
              )}
            </h3>
            {openMenu ? (
              <ul className="detail-ul">
                <li className="detail-li">Ticket type </li>
                <li className="detail-li">Subject</li>
                <li className="detail-li">ID</li>
              </ul>
            ) : null}
          </div>
          <div className="main_att">
            <h3 className="txt_att" onClick={toggleLead}>
              Lead data
              {openLead ? (
                <span className="material-symbols-outlined">arrow_drop_up</span>
              ) : (
                <span className="material-symbols-outlined">arrow_drop_down</span>
              )}
            </h3>
            {openLead ? (
              <ul className="detail-ul">
                <li className="detail-li">ticket type </li>
                <li className="detail-li">Subject</li>
                <li className="detail-li">Id</li>
              </ul>
            ) : null}
          </div>
          <div className="main_att">
            <h3 className="txt_att" onClick={toggletag}>
              Lead Tag
              {openTag ? (
                <span className="material-symbols-outlined">arrow_drop_up</span>
              ) : (
                <span className="material-symbols-outlined">arrow_drop_down</span>
              )}
            </h3>
            {openTag ? (
              <ul className="detail-ul">
                <li className="detail-li">ticket type </li>
                <li className="detail-li">Subject</li>
                <li className="detail-li">Id</li>
              </ul>
            ) : null}
          </div>
          <div className="main_att">
            <h3 className="txt_att" onClick={toggleRecent}>
              Recent Conversations
              {openRecent ? (
                <span className="material-symbols-outlined">arrow_drop_up</span>
              ) : (
                <span className="material-symbols-outlined">arrow_drop_down</span>
              )}
            </h3>

            {openRecent ? (
              <ul className="detail-ul">
                <li className="detail-li">ticket type </li>
                <li className="detail-li">Subject</li>
                <li className="detail-li">Id</li>
              </ul>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Detail;
