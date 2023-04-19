import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import './Detail.css';
const Detail = () => {
  const Idetail = [
    {
      id: 1,
      title: 'Ticket type',
      iconclass: 'user_icon'
    },
    {
      id: 2,
      title: 'Subject',
      iconclass: 'user_icon'
    },
    {
      id: 3,
      title: 'ID',
      iconclass: 'user_icon'
    }
  ];
  const [close, setClose] = useState(true);

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
            <Dropdown className="txt_att" title=" Assignee" Idetail={Idetail} />
          </div>
          <div className="main_att">
            <Dropdown className="txt_att" title="Lead data" Idetail={Idetail} />
          </div>
          <div className="main_att">
            <Dropdown className="txt_att" title="Lead Tag" Idetail={Idetail} />
          </div>
          <div className="main_att">
            <Dropdown className="txt_att" title=" Recent Conversations" Idetail={Idetail} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Detail;
