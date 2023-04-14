import React from 'react';
import './App.css';
import Inbox from './component/Inbox';
import Sidebar from './component/Sidebar';
import Chatbox from './pages/Chatbox';

function App() {
  return (
    <div className="Main_cls">
      <div className="app_side">
        <Sidebar />
      </div>
      <div className="app_inbox">
        <Inbox />
      </div>
      <div className="app_chat">
        <Chatbox />
      </div>
    </div>
  );
}

export default App;
