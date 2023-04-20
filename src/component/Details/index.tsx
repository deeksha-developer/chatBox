import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import './Detail.css';
const Detail = (props: any) => {
  const Idetail = [
    {
      id: 1,
      title: 'Ticket type',
      iconclass: 'user_icon',
      icon: '',
      icontext: 'Convert to ti..'
    },
    {
      id: 2,
      title: 'Subject',
      iconclass: 'user_icon',
      icon: '+',
      icontext: 'Add'
    },
    {
      id: 3,
      title: 'ID',
      iconclass: 'user_icon',
      icon: '#',
      icontext: '5'
    }
  ];
  const [close, setClose] = useState(true);

  const toggleClose = () => {
    setClose(!setClose);
  };

  return (
    <div className={`main_box ${props.toggle && 'hideMe'}`}>
      <div className="txt_box">
        <h4 className="txt_head">Details</h4>

        <span
          // onClick={toggleClose}
          onClick={props.handleToggleClick}
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
                style={{ paddingLeft: '38px', fontSize: '13px' }}
                className="material-symbols-outlined">
                account_circle
              </span>
              <span>unassigned</span>
            </p>
            <p>
              Team
              <span
                style={{ paddingLeft: '65px', fontSize: '13px' }}
                className="material-symbols-outlined">
                account_circle
              </span>
              <span>unassigned</span>
            </p>
            <p>
              link <span className="link_cls">create link</span>
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
